import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-archival',
  imports: [],
  templateUrl: './jobs-archival.component.html',
  styleUrl: './jobs-archival.component.css'
})
export class JobsArchivalComponent {
  jobListings = [
    {
      companyName: "Microsoft",
      position: "Backend Intern",
      description: "Developing scalable server-side applications.",
      date: "2023-11-01"
    },
    {
      companyName: "Google",
      position: "Frontend Developer",
      description: "Building user-friendly interfaces with React.",
      date: "2023-12-15"
    },
    {
      companyName: "Amazon",
      position: "Cloud Engineer",
      description: "Managing AWS infrastructure and deployments.",
      date: "2024-01-10"
    },
    {
      companyName: "Tesla",
      position: "Software Engineer",
      description: "Working on autonomous driving systems.",
      date: "2024-02-20"
    },
    {
      companyName: "Apple",
      position: "iOS Developer",
      description: "Creating apps for the iPhone ecosystem.",
      date: "2023-10-25"
    },
    {
      companyName: "Netflix",
      position: "Data Analyst",
      description: "Analyzing user streaming patterns.",
      date: "2023-09-30"
    },
    {
      companyName: "Facebook",
      position: "Full Stack Developer",
      description: "Building social media features end-to-end.",
      date: "2024-03-05"
    },
    {
      companyName: "IBM",
      position: "AI Researcher",
      description: "Exploring machine learning algorithms.",
      date: "2023-11-20"
    },
    {
      companyName: "Spotify",
      position: "Backend Developer",
      description: "Optimizing music streaming services.",
      date: "2024-01-15"
    },
    {
      companyName: "Adobe",
      position: "UI/UX Designer",
      description: "Designing creative software interfaces.",
      date: "2023-12-01"
    }
  ];



}
