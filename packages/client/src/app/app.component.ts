import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USER_BY_EMAIL } from '../queries/userQueries';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'client';

	constructor(private apollo: Apollo) {}

	ngOnInit(): void {
		this.apollo
			.watchQuery({
				query: GET_USER_BY_EMAIL
			})
			// tslint:disable-next-line
			.valueChanges.subscribe(user => console.log(user));
	}
}
