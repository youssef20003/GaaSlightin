export interface Job {
    _id: string;
    title: string;
    company: string;
    archive_date: string;
    source: string;
    url: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
export interface JobDescription {
    _id: string;
    jobId: string;
    userId: string;
    url: string;
    location: string;
    fullText: string;
    posting_date: string;
    skills: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface JobResponse {
    job: Job;
    description: JobDescription;
}