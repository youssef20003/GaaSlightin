export interface IJobMini  {
    _id: string;
    title: string;
    company: string;
    archive_date: string; // ISO 8601 date string
    source: string;
    url: string;
    userId: string;
    skills: string[]; // Array of strings
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    __v: number; // Version key, typically used by MongoDB
}