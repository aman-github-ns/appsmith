import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function TokenHandler() {
  const [decodedToken, setDecodedToken] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleUser = async () => {
      if (token) {
        try {
          //pass the token to the user/me endpoint to get the user info
          const userInfo = JSON.parse(await getUserInfo(token));
          console.log("🚀 ~ handleUser ~ userInfo:", JSON.stringify(userInfo));

          userInfo.roles.forEach((role: object) => {
            // @ts-ignore
            console.log(role.name);
            // @ts-ignore
            if (role.name.contains("admin")) {
              handleAdminTasks();
            } else {
              handleNonAdminTasks();
            }
          });

          let tenantID = await fetchWorkspaceId();

          const rename = userInfo.tenant.name || "";
          renameWorkspace(rename, tenantID);

          //invite the user to the tenant workspace
          inviteUser("66d95a01dde92429442668e7", [userInfo.email]);

          //delete the default workspace (if it exists)
          // deleteWorkspace("66d95a01dde92429442668e7", [
          //   "apiTest1280@email.com",
          // ]);
        } catch (e) {
          console.error("Error decoding token:", e);
        } finally {
          window.location.href = "/applications";
        }
      }
    };

    handleUser(); // Call the async function inside useEffect
  }, [token]);

  const handleNonAdminTasks = () => {
    console.log("🚀 ~ handleAdminTasks ~ isNonAdmin:", isAdmin);
  };

  const handleAdminTasks = () => {
    console.log("🚀 ~ handleAdminTasks ~ isAdmin:", isAdmin);
  };

  const getUserInfo = async (token: string) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://auth-api.dev.apps.yokogawa.build/users/me",
        requestOptions,
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return JSON.stringify(response);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const renameWorkspace = async (name: string, workspaceId: string) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      id: workspaceId,
      name: name,
    });

    const requestOptions: RequestInit = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow", // Correct redirect type
    };

    try {
      //renaming the workspace to the user's ID
      const response = await fetch(
        `https://dev.appsmith.com/api/v1/workspaces/${workspaceId}`,
        requestOptions,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parsing as JSON
      console.log(result); // Log the result to see the full response
    } catch (error) {
      console.error("Error:", error); // Handle the error properly
    }
  };

  const inviteUser = async (permissionGroupId: string, userNames: string[]) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Accept-Language", "en-US,en;q=0.9");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      permissionGroupId: permissionGroupId,
      usernames: userNames,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect, // Cast as RequestRedirect
    };

    try {
      const response = await fetch(
        "https://dev.appsmith.com/api/v1/users/invite",
        requestOptions,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const deleteWorkspace = async (
  //   permissionGroupId: string,
  //   userNames: string[],
  // ) => {
  //   const myHeaders = new Headers();
  //   myHeaders.append("Accept", "application/json, text/plain, */*");
  //   myHeaders.append("Accept-Language", "en-US,en;q=0.9");
  //   myHeaders.append("Content-Type", "application/json");

  //   const raw = JSON.stringify({
  //     permissionGroupId: permissionGroupId,
  //     usernames: userNames,
  //   });

  //   const requestOptions: RequestInit = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow" as RequestRedirect, // Cast as RequestRedirect
  //   };

  //   try {
  //     const response = await fetch(
  //       "https://dev.appsmith.com/api/v1/users/invite",
  //       requestOptions,
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const fetchWorkspaceId = async () => {
    try {
      const response = await fetch("/api/v1/workspaces/home", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("workspace info: ", data.data[0]); // Handle the workspace data
      return data.data[0].id;
    } catch (error) {
      console.error("Error fetching workspace:", error);
    }
  };

  return (
    <div>
      <h1>Token Received</h1>
      <p>Your token is: {token}</p>
      {decodedToken && (
        <div>
          <h2>Decoded Token:</h2>
          <pre>{JSON.stringify(decodedToken, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default TokenHandler;
