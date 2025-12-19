# Currency Exchange-Rate Converter

**This handy app helps you quickly see how much your money is worth in over 160+ different countries, making it easy to plan your spending during travels, personal financing and more.**

## Table of Contents

**App Features**

**Technology Stack**

**Component Tree & Architecture**

**Backend Integration: Airtable & API Management**

**Secure Configuration with .env Variables**

**Project Objectives & Takeaways**

**Project Challenges**

**Future Enhancements**

## 📱 App Features

- **Global Currency Coverage**: Seamlessly converts over 165 different global currencies using accurate, real-time data.

- **Quick-Access Popular Rates**: A dedicated dashboard that allows users to select major global currency pairs with a single click.

- **Favorites**: Users can curate a personalized list of frequently used currency pairs, which are securely stored and retrieved via an Airtable backend integration.

- **Search & Navigation**: The interface features a streamlined search system for currency selection and a clean navigation structure.

## 💻 Technology Stack

**React** -  The core frontend library used for building a fast, responsive, and modular user interface.

**CSS** - Utilized for styling and UI elements

**Airtable** - Serves as the cloud-based backend database for persistent storage and management

## 🖧 Component Tree & Architecture

![alt text](<Component Tree.png>)


## 🔗 Backend Integration: Airtable & API Management

**Real-Time Data Source** - Leverages ExchangeRate-API to provide accurate, real-time conversion data for over 160+ global currencies.
(https://www.exchangerate-api.com/)

**API Validation & Testing** - Utilized Bruno, an open-source API client, during the development stage to test endpoint responsiveness and ensure data accuracy before frontend integration.

**Persistent Cloud Storage**: Implemented Airtable to provide persistent storage for user-specific favorite currency pairs.

**Secure Credential Management**: Employs environment variables (.env) to securely manage sensitive API keys, ensuring all backend requests are authenticated via Bearer Tokens.


## 🔑 Secure Configuration with .env Variables

To maintain high security standards and prevent the exposure of sensitive credentials, this application utilizes environment variables. These keys are stored in a .env file at the root of the project and are excluded from version control to protect the integrity of the backend services.

### 🛠️ Setup Instructions

To run this application locally, you must create a .env file in your root directory and populate it with your specific credentials as follows:

**Airtable Configuration:**

>VITE_AIRTABLE_API_KEY=your_api_key_here
VITE_AIRTABLE_BASE_ID=your_base_id_here
VITE_AIRTABLE_TABLE_ID=your_table_id_here
VITE_AIRTABLE_TABLE_NAME=your_table_name_here

**Exchange Rate API Configuration:**
>VITE_EXCHANGE_CURRENCY_API=your_api_key_here

(https://www.exchangerate-api.com/)

## 💡 Project Objectives & Takeaways

- **React Foundation**: Developed a deep understanding of React’s modular mechanics by utilizing a Component-Based UI that leverages React Router for seamless navigation, Core Hooks (useState, useEffect, useCallback) and the principle of Lifting State, among others, to the parent container to ensure synchronized data flow across the entire tree.

- **Full-Stack Integration & API**: Established foundation in front-end development by integrating multiple external service layers. This involved real-time data fetching from ExchangeRate-API and persistent state management via Airtable.

- **End-to-End Development Workflow**: Gained proficiency in the full development lifecycle—from initial API validation and testing using Bruno to implementing secure environment variable configurations

## ⚔️ Project Challenges

- **API Selection**: Navigate through initial development phase by evaluating various currency APIs, carefully weighing rate limits and data accuracy against project requirements and long-term usage.

- **Incremental Component Development**: Managed project development by adopting a phased approach; building core Components first before integrating additional features. While this approach required more time and effort, developing this approach benefited me greatly as it imposed key concepts and re-enforce certain functions necessary for my app to work.

- **Backend Integration & Data Persistence**: Streamlined the development lifecycle by adopting a phased approach, creating core Components before integrating advanced features. While this method required a greater initial investment of time, it proved invaluable in reinforcing fundamental React concepts and ensuring the App was robust and stable.

## 🚀 Future Enhancements

1. **Multi-Currency Conversion** : Implement functionality to allow users to convert a single base currency into multiple target currencies simultaneously for faster comparison.

2. **Bidirectional Conversion Toggle**: Add a "swap" feature that allows users to instantly switch between the base and target currencies with a single click.

3. **Historical Exchange Trends**: Integrate historical data charts for popular currencies, providing users with the insights needed to identify optimal exchange rate timings.

4. **Geolocation-Based Money Changers**: Incorporate a map feature to help users locate physical currency exchange services near their location.

5. **Rate Comparison Engine**: Aggregate and display exchange rate information from various popular digital money-changing platforms to help users find the most competitive rates.