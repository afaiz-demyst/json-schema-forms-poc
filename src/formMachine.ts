import { createMachine } from 'xstate';

export const formMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QEcCuB7ALgSwHZQFpN10AbAOgE11UAnAIVVjzlgGIp0AVdAQVlhhMAESEBDbKVgBtAAwBdRKAAO6ZjnS4lIAB6IAjAE4AbOWMB2SwGYATDasAWKwFZn9gDQgAnogAc+8l87Q31HQ19nfScAX2jPNCw8QmIycn5BEXFJdk4eABl0MVxRTAkpOUUkEFV1bE1tPQRjQ1lA5ytZWRtwm2NjWV9PHwR-QOCbX19+-XM7Z1j4jBx8IhIKdKESsthyMQEhAGExTDBOWi82AGMACxJBDcwK7RrsDS0qxrdyBwmrYyCnDZ9AMrENEFYIWNzA5ZPpjFZ9FEfsYFiAEstkms0vtMqVsuRLpoIK86rgrrc1GADkSSZonlUXm8GuDwuQbM4BhzgcZ2bIHGCEBCrFCYXCEUjeqj0UlVqkCkUttkONx0ABFJZgRXlBTPNS096gRr6VyGMww8zOQwmKxWyYC0ZBboTQzdExuKVLGUpCjy4pZKTkABG6FotHQAHckrwALY0XCYNgZeghsOR-AxuOPHUMvVMj4GMXkQxuHpGGZRcwCiE2MyI+w2cyGBHOeGxOIgXDoCBwbTSlbe3W1er5hAEXoBcy+TpdWRWXy2fQ2AUEZyBOcOeEbyKycImD2JftY6h0RjMXCsQf65mj8wBWSNv4TPnFww-e0BBy+JyzBzmDqIz99wxWV1hxLV4BzIcDV0RAx1CchJ2nGxZ3nIEl28RAbA3cg4WmPpzHvPpHCAr0sQecDdhxI4TjOYYVFzUlrwIOFV0QzpkLnBd0OGIVvkmCJegGSZLBIw9UnI-0dkJXBiTzeioOvexWl8cIp0RWxmjsKtIU-SY3H6fiRPbPtMXEsDJMojJeBgS85JgpovwQgiOXnDoXHhbThV0qYun8NwEVE0yfUKP08SkWzGJHEIaxtT9q2bdl+QwhAsNXCZ5xMCIOTCQKQPIX0KODUMIyjWNUHjCLh0NRATFaWLXPsY1Eu0hxyD+YwHB+T8rWtXLvXykKKNIEKuDAWho0q6CjQcKIEP05pzCIoJnBatq+g3TofIiGY+qxdUsE1STJuvXDTDQoILXaRFjAFCYaz82RnCnH4VICtsgA */
  id: "quoting-tool",
  initial: 'YourBusiness', 
  states: {
    YourBusiness: {
      on: {
        goToAssetDetails: "AssetDetails"
      }
    },

    AssetDetails: {
      states: {
        assetCategory: {
          on: {
            chooseAsset: "condition"
          }
        },

        condition: {
          on: {
            chooseCondition: {
              target: "assetAge",
              cond: "used"
            }
          }
        },

        assetAge: {}
      },

      initial: "assetCategory",

      on: {
        goToLoanDetails: "LoanDetails"
      }
    },

    LoanDetails: {
      on: {
        goToQuoteDetails: "QuoteDetails"
      },

      states: {
        borrowingAmount: {
          on: {
            setBorrowingAmount: "loanTerm"
          }
        },

        loanTerm: {}
      },

      initial: "borrowingAmount"
    },
    QuoteDetails: {}
  }
})