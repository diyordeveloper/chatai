import React, { ReactNode, createContext, useState, useEffect } from "react";
import { DARK_THEME, LIGHT_THEME } from "./colors";
interface UiendPointsContextProps {}
export const UiendPointsPr = createContext<UiendPointsContextProps>({});
type Props = {
  children: ReactNode;
};
export const UiendPoints = ({ children }: Props) => {
  // Define API endpoint URLs
  const API_BASE_URL = "https://example.com/api";
  const API_SESSION_START_URL = `${API_BASE_URL}/sessionstart`;
  const API_GET_MODELS_URL = `${API_BASE_URL}/getmodels`;
  const API_INFER_URL = `${API_BASE_URL}/infer`;
  const API_STOP_URL = `${API_BASE_URL}/stop`;
  const API_RESET_URL = `${API_BASE_URL}/reset`;
  const API_RENAME_URL = `${API_BASE_URL}/rename`;
  const API_HISTORY_URL = `${API_BASE_URL}/history`;
  const API_SETTINGS_URL = `${API_BASE_URL}/settings`;
  // State variables
  // 1----------------------------------------
  // This code uses the fetch() method to make a GET request to the "/sessionstart" endpoint. It then uses the json() method to parse the response data as JSON. If the response has a "success" value of true, it extracts the token string from the response data and saves it for use in future requests. If the "success" value is false, it logs the error message to the console and handles the situation accordingly.
  fetch("/sessionstart")
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        const token = data.token;
        // use token for future requests
      } else {
        // handle error
        console.error(data.error);
        // access to history and settings may be restricted
      }
    })
    .catch((error) => console.error(error));
  // 2----------------------------------------
  // This code uses the useState() and useEffect() hooks to manage the state of the component and make the GET request to the "/getsettings" endpoint when the component mounts. Once the settings file is retrieved, it renders the input boxes or groups based on the contents of the file.
  const [settingss, setSettingss] = useState({});

  useEffect(() => {
    fetch("/getsettings")
      .then((response) => response.json())
      .then((data) => setSettingss(data))
      .catch((error) => console.error(error));
  }, []);
  // 3----------------------------------------
  //   In the above code, saveSettings is an async function that takes settings as an argument. The settings argument is an object that has the same format as the JSON returned by the getsettings endpoint. Inside the try block, we use the fetch function to make a POST request to the /settings endpoint with the settings object as the request body. We also specify the Content-Type header as application/json to indicate that we are sending JSON data in the request body. We then use the response.json() method to extract the JSON data from the response. If the response is successful (i.e., has a status code between 200 and 299), we log a success message to the console along with the JSON response. Otherwise, we log an error message along with the JSON response. If an error occurs during the fetch request, we catch it and log it to the console.
  const saveSettings = async (settings: any) => {
    try {
      const response = await fetch("/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Settings saved successfully");
        console.log(data); // {"success":true}
      } else {
        console.error("Failed to save settings");
        console.error(data); // {"success":false, "error":"Something"}
      }
    } catch (error) {
      console.error(error);
    }
  };
  // 4----------------------------------------
  //   In the example above, we define two interfaces for the response types ListModelsResponse and ErrorResponse. We also define an interface Model to represent the structure of a single model object. The getListOfModels function makes the GET request to /listmodels and returns an array of Model objects. If the request fails, it throws an error with the message provided in the error property of the response. Finally, we can call the getListOfModels function and handle the response and error using a try-catch block.
  async function getListOfModels() {
    const response = await fetch("/listmodels");
    const data = await response.json();

    if (data.success) {
      return data.models;
    } else {
      throw new Error(data.error);
    }
  }
  // usage
  try {
    const models = getListOfModels();
    console.log(models);
  } catch (error) {
    console.error(error);
  }
  // 5----------------------------------------
  //   This code uses the useState hook to keep track of the folders and files arrays, and the useEffect hook to make the GET request to /history when the component mounts (since the empty dependency array [] is passed as the second argument to useEffect). Once the data is fetched, it updates the state variables using the setFolders and setFiles functions. Finally, the folders and files arrays are mapped over and displayed as lists in the returned JSX.
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("/history")
      .then((response) => response.json())
      .then((data) => {
        setFolders(data.folders);
        setFiles(data.files);
      })
      .catch((error) => console.error(error));
  }, []);
  // 6----------------------------------------
  //   This example uses the useState hook to keep track of the conversation data and renders a button to trigger the handleViewConversation function. When the button is clicked, it sends a POST request to /view with the specified variables and sets the conversation data to the returned conversation if the request is successful.
  const [conversation, setConversation] = useState<string>("");
  const handleViewConversation = async () => {
    const response = await fetch("/view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "20230419 135438 Where is Waldo",
        folder: "To Do",
      }),
    });

    if (!response.ok) {
      console.log("Error retrieving conversation");
      return;
    }

    const conversationData = await response.json();
    setConversation(conversationData.conversation);
  };
  // 7----------------------------------------
  // Note that this code uses the fetch function to make the HTTP request and handles both success and error responses. You can customize the code to handle the response data in a way that makes sense for your application.
  fetch("/update")
    .then((response) => response.json())
    .then((data) => {
      // handle success response
      console.log(data);
    })
    .catch((error) => {
      // handle error response
      console.error(error);
    });

  // 8----------------------------------------
  //   Here's an example code snippet in React for the /rename endpoint:
  // This function takes in the id and folder (or null if it's a conversation) of the conversation or folder that needs to be renamed, as well as the new name. It sends a POST request to the /rename endpoint with the necessary data in the request body. It then returns an object with a success property indicating whether the operation was successful, and an optional error property if an error occurred. Note that this code assumes that the response from the server is in the format specified in the prompt. If the server response is different, you may need to modify this code accordingly.
  async function renameConversationOrFolder(
    id: string,
    folder: string | null,
    newName: string
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch("/rename", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          folder: folder,
          newName: newName,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return { success: false, error: "Something went wrong." };
    }
  }

  // 9----------------------------------------
  //   In this example, we're making a POST request to the /mkdir endpoint with a JSON body containing the folderName property set to the desired folder name. If the server responds with a 200 OK status code and success property set to true, we log a success message to the console. If there was an error, we log the error message returned in the error property of the response. If there was a network error or other unexpected error, we catch it and log the error message to the console.
  fetch("/mkdir", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      folderName: "New Folder",
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      if (data.success) {
        console.log("Folder created successfully.");
      } else {
        console.log("Error creating folder:", data.error);
      }
    })
    .catch((error) => {
      console.error("Error creating folder:", error);
    });

  // 10----------------------------------------
  //   In this example, the handleDeleteFolder function makes a POST request to the /rmdir endpoint with the id of the folder to delete and folder value as null. If the request is successful, it will log the success message to the console. Otherwise, it will log the error message.
  const handleDeleteFolder = async (folderId: any) => {
    try {
      const response = await fetch("/rmdir", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: folderId, folder: null }),
      });

      const data = await response.json();
      if (data.success) {
        // do something on success
      } else {
        // handle error
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 11----------------------------------------
  //   You can modify the URL to match the endpoint you want to make a request to, and the headers to include the appropriate authorization header. The response.json() method is called to parse the response as JSON, and then you can handle the success or error case based on the data.success property.
  const sessionid = "your_sessionid_here";
  const headers = {
    Authorization: `Bearer ${sessionid}`,
  };
  fetch("/ping", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + sessionid,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // session is still open
      } else {
        // session has been closed
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // 12----------------------------------------
  //   This function takes in the sessionId obtained from /sessionstart, sets the authorization header, and sends a GET request to /ping. It then checks the response for success and logs an error message if it's false. If the ping is successful, it logs a success message and performs other actions as needed.
  const ping = async (sessionId: any) => {
    const headers = {
      Authorization: `Bearer ${sessionId}`,
    };

    try {
      const response = await fetch("/ping", { headers });
      const data = await response.json();

      if (!data.success) {
        console.log("Session has been closed");
        // handle session closed error
      }

      console.log("Ping success");
      // do something else
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  // 13----------------------------------------
  //   Note that sessionid is the authorization token obtained from /sessionstart, and it should be included in the header of the request using the Authorization field with the Bearer prefix.
  fetch("/unloadmodel", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionid}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log("Model unloaded successfully!");
      } else {
        console.error("Failed to unload the model:", data.error);
      }
    })
    .catch((error) =>
      console.error("Error occurred while unloading the model:", error)
    );

  // 14----------------------------------------
  //   Note that this is just an example and you'll need to adapt it to fit your specific use case. You'll also need to implement the /ping endpoint separately, as it's not included in this code.
  const infer = async (text: any, model: any, sessionId: any) => {
    // Pause the /ping timer during inference
    // @ts-ignore
    clearInterval(pingInterval);

    const response = await fetch("/infer", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionId}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        model,
      }),
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Failed to get response from server.");
    }

    // Use a ReadableStream to read the streamed response
    // @ts-ignore
    const reader = response.body.getReader();
    let chunks = [];
    let done = false;

    while (!done) {
      const { done: isDone, value } = await reader.read();

      if (isDone) {
        done = true;
      } else {
        chunks.push(value);
      }
    }

    // Combine the response chunks into a single string
    // @ts-ignore
    const responseText = new TextDecoder().decode(
      // @ts-ignore
      new Uint8Array(chunks.flat())
    );

    // Resume the /ping timer
    // @ts-ignore
    pingInterval = setInterval(() => {
      // Call the /ping endpoint here
    }, 15000);

    // Parse the response into JSON
    const jsonResponse = JSON.parse(responseText);

    // Return the response
    return jsonResponse;
  };

  // 15----------------------------------------
  //   Note that this assumes that the sessionId variable contains the session ID obtained from /sessionstart.
  const stopInference = async (sessionId: any) => {
    const response = await fetch("/stop", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionId}`,
      },
    });
    const data = await response.json();
    if (data.success) {
      // Handle success
    } else {
      // Handle error
    }
  };

  // 16----------------------------------------
  //   In this example, sessionId is the ID of the user's session obtained from /sessionstart. The code sends a GET request to the /reset endpoint with the Authorization header containing the user's session ID. If the server responds with a success status code, the data variable will contain the JSON response from the server. Otherwise, an error will be thrown with an error message.
  fetch("/reset", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + sessionid,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to reset conversation");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // {"success":true}
    })
    .catch((error) => {
      console.error(error);
    });

  const ui: UiendPointsContextProps = {};

  return <UiendPointsPr.Provider value={ui}>{children}</UiendPointsPr.Provider>;
};
