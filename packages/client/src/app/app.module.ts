import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ApolloModule,
		HttpLinkModule
	],
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory(httpLink: HttpLink) {
				return {
					link: httpLink.create({
						uri: 'http://localhost:5000/graphql'
					}),
					cache: new InMemoryCache()
				};
			},
			deps: [HttpLink]
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
