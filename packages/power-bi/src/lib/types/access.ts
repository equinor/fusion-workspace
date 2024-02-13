export type ReportAccessUser = {
  id: string;
  azureUniqueId: string;
};

export type ReportAccessInfo = {
  id: string;
  title: string;
  description: string;
  accessDescription: string;
  ownedBy: ReportAccessUser;
  publishedBy: ReportAccessUser;
};
