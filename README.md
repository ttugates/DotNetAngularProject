# DotNetAngularProject

## This is my .NET and Angular Portfolio Site

The following are features I envision.

### Server
- [X] .NET 9 API
- [ ] Containerize and Host with Reverse Proxy
- [ ] Add OpenIdDict Authentication using Auth Code w/ PKCE
- [ ] Add Google MS and Apple Federated SSO + 2FA with email
- [ ] Customize Identity Razor Pages to match Client
- [ ] Implement CI/CD 
- [ ] CRUD on relational Data (Postgres or SQLLite)
  - Consider use Quartz.net to pull data from souce and keep updated on long interval
  - Consider use NHTSA database as is large and can demonstrate various query mechanisms
- [ ] Implement REST
- [ ] gRPC
- [ ] GraphQL
- [ ] Demonstrate SignalR with a real time data source.  Stocks, weather or pollen source?
- [ ] Implement Code Generation
- [ ] Use Redis to implement Pub/Sub ( investigate using for messaging )
- [ ] Implement messaging patterns w MassTransit.  CQRS, Event Sourcing, Outbox, Pub/Sub.
### Client
- [X] Angular Client
- [X] Add Material UI + Tailwind 
- [X] Add minimal portfolio content
- [ ] Implement OAuth2 
- [ ] Create a visualization for various sorting algorythms(consider use HTML Canvas)
- [ ] Consider a custom state management library using WASM(using Rust maybe)

