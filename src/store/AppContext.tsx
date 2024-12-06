import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string; // Use Date if you plan to parse this string into a Date object
  gender: string;
  profilePicture: string;
  coverPicture: string | null;
  bio: string | null;
  createdAt: string; // Use Date if you plan to parse this string into a Date object
  updatedAt: string; // Use Date if you plan to parse this string into a Date object
}

interface Post {
  id: number;
  username: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  likesCount: string;
  commentsCount: string;
  createdAt: string;
}

interface AppContextProps {
  user: any | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  userPosts: Post[];
  setUserPosts: React.Dispatch<React.SetStateAction<any[]>>;
  userFriends: Friend[];
  pendingRequests: [];
  pendingLoading: boolean;
  friendsLoading: boolean;
  Postloading: boolean;
  change: boolean;
  setChange: any;
  allUsers: User[];
}

interface Friend {
  id: number;
  userId: number;
  friendId: number;
  userUserName: string;
  userProfilePic: string;
  friendUserName: string;
  friendProfilePic: string;
  groupName: string;
}

const BASE_URL = "http://localhost:8002";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any | null>(null);
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [userFriends, setUserFriends] = useState<Friend[]>([]);
  const [Postloading, setPostLoading] = useState(true);
  const [friendsLoading, setFriendsLoading] = useState(true);
  const [pendingLoading, setPendingLoading] = useState(true);
  const [pendingRequests, setPendingRequests] = useState<any>([]);
  const [change, setChange] = useState(true);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/facebook/getAllUsers`
        );
        setAllUsers(response.data);
        console.log("all users are ", response.data);
      } catch (error) {
        console.error("Error occurred while fetching all users ", error);
      }
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchUserAndFriendPosts = async () => {
        try {
          setPostLoading(true);
          const response = await axios.get(
            `http://localhost:8003/facebook/get-user-friend-post/${user.id}`
          );
          setUserPosts(response.data);
          console.log("User posts are", response.data);
        } catch (error) {
          console.error(
            "Error occurred while fetching user and his friends post ",
            error
          );
        } finally {
          setPostLoading(false);
        }
      };

      fetchUserAndFriendPosts();
    } else {
      setUserPosts([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const fetchFriends = async () => {
        try {
          setFriendsLoading(true);
          const response = await axios.get(
            `${BASE_URL}/facebook/getFriends/${user.id}`
          );

          // Map the response data to create a friends list based on the user's relationship
          const filteredFriends = response.data
            .map((friend: any) => {
              // If the current user is the user in the friend object
              if (friend.userId === user.id) {
                return {
                  id: friend.friendId,
                  userName: friend.friendUserName,
                  profilePic: friend.friendProfilePic,
                };
              }
              // If the current user is the friend in the friend object
              else if (friend.friendId === user.id) {
                return {
                  id: friend.userId,
                  userName: friend.userUserName,
                  profilePic: friend.userProfilePic,
                };
              }
              return null;
            })
            .filter(Boolean); // Filter out any null values

          setUserFriends(filteredFriends);
        } catch (error) {
          console.error("Error occurred while fetching Friends", error);
        } finally {
          setFriendsLoading(false);
        }
      };

      fetchFriends();
    } else {
      setUserFriends([]);
    }
  }, [user, change]);

  useEffect(() => {
    if (user) {
      const fetchPendingRequests = async () => {
        try {
          setPendingLoading(true);
          const response = await axios.get(
            `${BASE_URL}/facebook/pending-request/${user.id}`
          );
          setPendingRequests(response.data);
          console.log("pending requests are", response.data);
        } catch (error) {
          console.error(
            "Error occurred while fetching pending requests ",
            error
          );
        } finally {
          setPendingLoading(false);
        }
      };

      fetchPendingRequests();
    } else {
      setPendingRequests([]);
    }
  }, [user, change]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        allUsers,
        setChange,
        userPosts,
        setUserPosts,
        pendingLoading,
        friendsLoading,
        change,
        Postloading,
        userFriends,
        pendingRequests,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppcontext must be used within the appprovider");
  }
  return context;
};
