import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent {
  @Input() username: string = '';
  user: any;
  repositories: any[] = [];
  isLoading: boolean = false;
  pageSizeOptions: number[] = [10, 25, 50, 100];
  pageSize: number = 10;
  currentPage: number = 1;
  totalRepositories: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['username'] && changes['username'].currentValue) {
      this.fetchUserData();
      this.fetchRepositories();
    }
  }

  private fetchUserData(): void {
    this.apiService.getUser(this.username).subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching user data:', error);
        // Handle error, e.g., display an error message to the user
      }
    );
  }

  private fetchRepositories(): void {
    this.isLoading = true;
    const page = this.currentPage;
    const perPage = this.pageSize;

    this.apiService.getUserRepos(this.username, page, perPage).subscribe(
      (repositories) => {
        this.repositories = repositories;
        this.totalRepositories = this.repositories.length;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching repositories:', error);
        this.isLoading = false;
        // Handle error, e.g., display an error message to the user
      }
    );
  }

  onPageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.currentPage = 1; // Reset to the first page when page size changes
    this.fetchRepositories();
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.fetchRepositories();
  }


}
