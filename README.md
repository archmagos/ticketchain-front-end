## Ticketchain - A blockchain ticketing website and miner

[![Maintainability](https://api.codeclimate.com/v1/badges/620c96f22df04ba1975b/maintainability)](https://codeclimate.com/github/archmagos/ticketchain-front-end/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/620c96f22df04ba1975b/test_coverage)](https://codeclimate.com/github/archmagos/ticketchain-front-end/test_coverage)

A blockchain-based ticketing app which allows users to purchase concert tickets and stores the validated transactions on a blockchain. Created as a final group project during the Makers Academy bootcamp in August 2018.

This repository contains the ticket purchasing website that sends data to our blockchain. For full project details including objectives and outcomes, please [refer to the back-end repository](https://github.com/archmagos/ticketchain).

## How to run

To deploy locally, our back-end server needs to be run in conjunction with the web front-end. Please download or clone both this repository [and the back-end](https://github.com/archmagos/ticketchain) (following the instructions in that repository to get the back-end running).

The following commands will install project dependencies and host the ticket purchasing site on ``http://localhost:3000``. Transactions that are made on the front-end will subsequently appear as unverified-transactions within the miner.

**Prerequisites**: Node, NPM

```bash
> npm install  
> npm start
```

### To run tests
```bash
# For Jest/Enzyme tests
> npm test -- --coverage

# For Cypress tests (in another terminal, once server is running)
> npm run cypress:open
```

## Authors/Credits
[Ben](https://github.com/Ben-893) / [Daniel](https://github.com/dct-lau17) / [Fred](https://github.com/archmagos) / [Jeff](https://github.com/jeff1108) / [Nabil](https://github.com/bilfar)
