# Requirements
Install the followign in your local machine:
- docker
- sam cli + awscli
- make 

Create your AWS credentials and have it stored in `~/.aws`

# Project Structure
Below are the directories intended use

- deploy                            // dir for deployment parameters or variables per environment (dev/stg/prd)
- functions                         // dir for λ functions contained in individual directories
    - sample-app                    // sample function called sample-app
        - app.js                    // λ handler
        - package.json              // λ dependencies
- layers                            // dir for code/libraries shared across multiple λ functions 
    - code                          // dir for common code
    - lib                           // dir for common libraries
- tests                     
    - resources                     // test resources (e.g payloads)
    - lambdas                       // tests for all the λ functions 
        - sample-app
            - app.test.js           // the filename should follow the convention *.test.js
    - layers                        // tests for all the layers
        - code
            - common-code.test.js
        - lib
            - library.test.js
- template.yml                      // SAM template
- Dockerfile                        // All tests will be run through docker to simulate lambda environment
- Makefile                          // All the cli commands

