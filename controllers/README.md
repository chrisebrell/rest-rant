# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method | Path      | Purpose                                                          |
|--------|-----------|------------------------------------------------------------------|
| GET    |  /                        | Home page                                        |
| GET    |  /places                  | Places index page                                |
| POST   |  /places                  | Create new place                                 |
| GET    |  /places/new              | Form page for creating a new place               | 
| GET    |  /places/:id              | Details about a particular place                 |
| PUT    |  /places/:id              | Update a particular place                        |
| GET    |  /places/:id/edit         | Form page for editing an existing place          |
| DELETE |  /places/:id              | Delete a particular place                        |
| POST   |  /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE |  /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    |  *                        | 404 page (matches any route not defined above)   |


# Rant Model

| Field      |  Type     | Notes                                                                               |
|------------|-----------|-------------------------------------------------------------------------------------|
| author     |  string   | Name of comment's writer; defualts to Anonymous if missing.                         |
| rant       |  Boolean  | Each comment is either a rant (negative) or a rave (positive). Defaults to false.   |
| stars      |  number   | 1 to 5 star rating in increments of 0.5; required, no default.                      |
| content    |  string   | The written content of the comment; defaults to an empty string.                    | 
