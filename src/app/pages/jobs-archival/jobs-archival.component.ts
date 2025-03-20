import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Job, JobResponse } from '../../models/job.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { IJobMini } from '../../core/interfaces/iJobMini';

@Component({
  selector: 'app-jobs-archival',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './jobs-archival.component.html',
  styleUrl: './jobs-archival.component.css'
})
export class JobsArchivalComponent implements OnInit{
  baseUrl = 'http://localhost:3000';
  // token will be updated
  token = sessionStorage.getItem('Accesstoken');
  jobResponse !: IJobMini[];
  jobUrl: string = '';
  isSaving: boolean = false;
  sampleJobUrl: string = 'https://careers.procore.com/jobs/sr-manager-software-engineering-bengaluru-ka-india-ae9acb81-dbd7-48ce-9be1-1033d0e29964'; // Sample URL
  isCopied: boolean = false; // Track if copied
  isLoading: boolean = true;
  monkeyFlag: boolean = true;

  //  sampleJobResponses: JobResponse[] = [
  //   {
  //       job: {
  //           _id: "job_001",
  //           title: "Software Engineer",
  //           company: "Tech Corp",
  //           archive_date: "2025-01-15",
  //           source: "LinkedIn",
  //           url: "https://www.linkedin.com/job/001",
  //           userId: "user_001",
  //           createdAt: "2025-01-01T12:00:00Z",
  //           updatedAt: "2025-01-10T12:00:00Z",
  //           __v: 0
  //       },
  //       description: {
  //           _id: "desc_001",
  //           jobId: "job_001",
  //           userId: "user_001",
  //           url: "https://www.linkedin.com/job/001",
  //           location: "New York, USA",
  //           fullText: "We are looking for a skilled software engineer to join our team.",
  //           posting_date: "2025-01-02",
  //           skills: ["JavaScript", "TypeScript", "Angular", "Node.js"],
  //           createdAt: "2025-01-02T14:00:00Z",
  //           updatedAt: "2025-01-10T14:00:00Z",
  //           __v: 0
  //       }
  //   },
  //   {
  //       job: {
  //           _id: "job_002",
  //           title: "Data Scientist",
  //           company: "AI Solutions",
  //           archive_date: "2025-02-20",
  //           source: "Indeed",
  //           url: "https://www.indeed.com/job/002",
  //           userId: "user_002",
  //           createdAt: "2025-02-01T09:30:00Z",
  //           updatedAt: "2025-02-10T10:15:00Z",
  //           __v: 0
  //       },
  //       description: {
  //           _id: "desc_002",
  //           jobId: "job_002",
  //           userId: "user_002",
  //           url: "https://www.indeed.com/job/002",
  //           location: "San Francisco, USA",
  //           fullText: "Seeking a data scientist with experience in Python, TensorFlow, and data analysis.",
  //           posting_date: "2025-02-05",
  //           skills: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"],
  //           createdAt: "2025-02-05T11:45:00Z",
  //           updatedAt: "2025-02-10T12:00:00Z",
  //           __v: 0
  //       }
  //   },
  //   {
  //       job: {
  //           _id: "job_003",
  //           title: "DevOps Engineer",
  //           company: "Cloud Innovators",
  //           archive_date: "2025-03-10",
  //           source: "Glassdoor",
  //           url: "https://www.glassdoor.com/job/003",
  //           userId: "user_003",
  //           createdAt: "2025-03-01T08:15:00Z",
  //           updatedAt: "2025-03-08T10:00:00Z",
  //           __v: 0
  //       },
  //       description: {
  //           _id: "desc_003",
  //           jobId: "job_003",
  //           userId: "user_003",
  //           url: "https://www.glassdoor.com/job/003",
  //           location: "Remote",
  //           fullText: "Looking for an experienced DevOps engineer with expertise in AWS, Docker, and Kubernetes.",
  //           posting_date: "2025-03-05",
  //           skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  //           createdAt: "2025-03-05T13:00:00Z",
  //           updatedAt: "2025-03-08T15:30:00Z",
  //           __v: 0
  //       }
  //   }
  //   ];

  private skillColors: { [key: string]: string } = {
    'html': 'orange',
    'go': 'blue',
    'markdown': 'gray'
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchJobs();
    console.log(this.jobResponse);
  }

  fetchJobs(): void {
    // Set up headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    // Make the API call
    this.http
      .get<IJobMini[]>(`${this.baseUrl}/api/v0/jobs`, { headers })
      .subscribe({
        next: (response) => {
          this.jobResponse = response; // Store the response
          console.log('Jobs fetched:', this.jobResponse);
          this.isLoading = false;
          this.monkeyFlag = false;
        },
        error: (error) => {
          console.error('Error fetching jobs:', error);
          this.isLoading = false;
        }
      });
  }

  saveJob(): void {
    if (!this.jobUrl) {
      console.error('Job URL is required');
      return;
    }

    this.isSaving = true; // Start loading

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });

    const body = { url: this.jobUrl };

    this.http
      .post<JobResponse>(`${this.baseUrl}/api/v0/jobs`, body, { headers })
      .subscribe({
        next: (response) => {
          console.log('Job created:', response);
          const jobId = response.job._id; // Extract the job ID
          console.log(jobId);
          this.router.navigate(['/jobs', jobId]); // Navigate to jobs/<id>
          this.isSaving = false;
        },
        error: (error) => {
          console.error('Error creating job:', error);
          this.isSaving = false;
        }
      });
  }

  copySampleUrl(): void {
    navigator.clipboard.writeText(this.sampleJobUrl).then(() => {
      this.isCopied = true;
      console.log('Sample URL copied:', this.sampleJobUrl);
      // Reset "Copied" feedback after 2 seconds
      setTimeout(() => {
        this.isCopied = false;
        this.jobUrl = this.sampleJobUrl
      }, 1000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

  getSkillColor(skill: string): string {
    return this.skillColors[skill.toLowerCase()] || 'white'; // Default to white if no match
  }
}
