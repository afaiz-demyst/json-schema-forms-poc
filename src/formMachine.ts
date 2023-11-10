import { createMachine } from 'xstate';

export const formMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QEcCuB7ALgSwHZQFpN10AbAOgE11UAnAIVVjzlgGIp0AVdAQVlhhMAESEBDbKVgBtAAwBdRKAAO6ZjnS4lIAB6IAjAE4AbOWMB2SwGYATDasAWKwFZn9gDQgAnogAc+8l87Q31HQ19nfScAX2jPNCw8QmIycn5BEXFJdk4eABl0MVxRTAkpOUUkEFV1bE1tPQRjQ1lA5ytZWRtwm2NjWV9PHwR-QOCbX19+-XM7Z1j4jBx8IhIKdKESsthyMQEhAGExTDBOWi82AGMACxJBDcwK7RrsDS0qxrdyBwmrYyCnDZ9AMrENEFYIWNzA5ZPpjFZ9FEfsYFiAEstkms0vtMqVsuRLpoIK86rgrrc1GADkSSZonlUXm8GuDwuQbM4BhzgcZ2bIHGCEBCrFCYXCEUjeqj0UlVqkCkUttkONx0ABFJZgRXlBTPNS096gRr6VyGMww8zOQwmKxWyYC0ZBboTQzdExuKVLGUpCjy4pZKTkABG6FotHQAHckrwALY0XCYNgZeghsOR-AxuOPHUMvVMj4GMXkQxuHpGGZRcwCiE2MyI+w2cyGBHOeGxOIgXDoCBwbTSlbe3W1er5hAEXoBcy+TpdWRWXy2fQ2AUEZyBOftS18+w24wOD2JftY6h0RjMXCsQf65mj8wBWSNv4TPnFww-e0BBy+JyzBzmDqIz99wxWV1hxLV4BzIcDV0RAx1CchJ2nGxZ3nIEl28RAbAcUw4UtBwfgRXd7CAr0sQecDdhxI4TjOYYVFzUlrwIXCEKnTpkLnBd0OGIVvkmCJegGSZLBIw9UnI-0dkJXBiTzeioOvexWl8cIp0RWxmjsKtIU-SY3H6fiRPbPtMXEsDJMojJeBgS85JgpovwQ8xZA5ecOhceFtOFXSpi6fw3ARUTTJ9Qo-TxKRbMYkcQhrG1P2rZt2X5DCECw1cJiCFS7CsP9AuMz0xJChULODUMIyjWNUHjSLh0NRATFaOK3PsY0ku0hxyD+Xcfk-K1rSCkDyF9CjSFCrgwFoaMaugo0HCiBD9Oacw+jndl2s6vpsM6XyIhmAbvXIdUsE1STpuvOE+jZRcggtdpEWMAUJhrfyXKnH4VLy2IgA */
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
        goToLoanDetails: {
          target: "LoanDetails",
          cond: "assetDetailsComplete"
        }
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