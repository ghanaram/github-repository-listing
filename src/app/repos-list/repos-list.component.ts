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
    this.apiService.getUserRepos(this.username).subscribe(
      (repositories) => {
        this.repositories = repositories;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching repositories:', error);
        this.isLoading = false;
        // Handle error, e.g., display an error message to the user
      }
    );
  }


}
