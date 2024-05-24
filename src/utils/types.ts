export type usersData = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: {
    url: string;
    text: string;
  };
  data: [
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    }
  ];
};

export type status = "error" | "success" | "pending";

export type globalContextValues = {
  users: usersData;
  status: status;
  currentPage: string;
};
