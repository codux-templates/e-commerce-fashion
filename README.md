# Fashion Store Template

This is an online shopping platform that uses [Wix Headless](https://www.wix.com/studio/developers/headless) as the back office for managing the store. This project is designed to be your stepping stone to creating your own online store.

## Getting Started

1. Clone the repository in Codux and run the automated installation script.
1. Create your [Wix Headless](https://dev.wix.com/docs/go-headless/getting-started/setup/general-setup/create-a-project) project and copy your client ID from Settings > Headless Settings > OAuth apps.
1. Copy and rename [.env.template](./.env.template) to `.env`
1. Replace the current key in the newly created `.env` file in Codux with your headless site client ID.
1. Replace the current key in the [Codux Config](./codux.config.json) file in `previewConfiguration > environmentVariables` section with your headless site client ID.

Now all you have to do is deploy your Remix app and manage your store through Wix!

## Technologies Used

- **Wix eCommerce API**: Suite of services that addresses needs in online selling.
- **Remix**: A full stack web framework.
- **Motion**: A simple yet powerful motion library for React.
- **SWR**: React hooks for data fetching.
