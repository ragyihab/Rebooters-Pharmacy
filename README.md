 
# El7a2ny: A Virtual Clinic and Pharmacy System
El7a2ny is a software solution for clinics, doctors,
pharmacists and patients alike to streamline and automate the interactions between patients, medical doctors and pharmacists. This encompasses everything from trying to
find a doctor, scheduling meetings with doctors, conducting on-premise or online meetings, getting prescriptions, getting reminders for follow-ups, accessing medical history,
and ordering medication that was prescribed.

## Motivation
This project's purpose was initially, mainly for academic purposes. We learnt a ton of information on how to use MERN Stack which is an abbreviation for Mongodb, Express.js, React.js, Node.js. React and JavaScript being probably the most used framework for frontend and backend Web/App development made this project very fruitful. However, while developing the project, the team was motivated to design this project as if it were to be a real, usable website for people one day. We tried enhancing the UI/UX as much as possible to make the user want to recommend this website to other people.
## Build Status
This project is supposedly built to have no bugs/errors however, in terms of speed, you can definitely tell the project is running using free database servers. This causes the speed at which database fetches important data slower than we would like. This sometimes causes run-time errors as the website is trying to use an object that it fetched from the database, but due to the slow-fetch from the database it causes an error.
Additionally, it might not be considered a bug, but it is worth noting you can not sign in on 2 different accounts from the same browser application eg: Chrome, what will happen is that it will sign you out of the previous account and focus on the freshly signed in account.

## Code Style
Standard coding conventions.
## Screenshots

## Tech/Framework Used
MERN Stack

**Client:** React, Bootstrap

**Server:** Node, Express, Mongodb


## Features

- Intuitive UI/UX
- Cross Platform
## Usage/Examples

```javascript

```


## Installation

- [Install VS Code](https://code.visualstudio.com/download)
- [Install Node](http://nodejs.org/)
- [Install Git](https://git-scm.com/downloads)
After downloading these two, open a terminal and do the following:
```bash
  npm install -g nodemon
  npm install -g express
  npm install -g mongoose
```

## API Reference

#### Stripe API 

https://stripe.com/docs

### Guest API

#### Login

```http
POST /api/guest/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your Username |
| `password` | `string` | **Required**. Your Password |

#### Patient Registration

```http
POST /api/guest/createPatient
```

| Parameter                  | Type     | Description                                      |
| :------------------------- | :------- | :----------------------------------------------- |
| `username`                 | `string` | **Required**. Username of the user               |
| `name`                     | `string` | **Required**. Name of the user                   |
| `email`                    | `string` | **Required**. Email address of the user          |
| `password`                 | `string` | **Required**. Password for authentication   |
| `dateOfBirth`              | `string` | **Required**. Date of birth of the user          |
| `gender`                   | `string` | **Required**. Gender of the user                 |
| `mobile_number`            | `string` | **Required**. Mobile number of the user          |
| `emergency_contact`        | `object` | **Required**. Emergency contact information      |
| `emergency_contact.firstName` | `string` | First name of the emergency contact           |
| `emergency_contact.middleName` | `string` | Middle name of the emergency contact          |
| `emergency_contact.lastName`  | `string` | Last name of the emergency contact            |
| `emergency_contact.mobile_number` | `string` | Mobile number of the emergency contact    |


#### Request to be a Pharmacist on the System

```http
POST /api/guest/createNewPharmacistRequest 
```

| Parameter              | Type     | Description                           |
| :--------------------- | :------- | :------------------------------------ |
| `username`             | `string` | **Required**. Username of the user    |
| `name`                 | `string` | **Required**. Name of the user        |
| `email`                | `string` | **Required**. Email address of the user |
| `password`             | `string` | **Required**. Password for authentication |
| `dateOfBirth`          | `string` | **Required**. Date of birth of the user |
| `hourlyRate`           | `string` | **Required**. Hourly rate of the doctor             |
| `affiliation`          | `string` | **Required**. Affiliation of the doctor             |
| `educationalBackground`| `string` | **Required**. Educational background   |
| `idDocument`| `file` | **Required**. Upload copy of ID (png/pdf/..)  |
| `pharmacyDegreeDocument`| `file` | **Required**. Upload copy of medical license (png/pdf/..) |
| `workingLicenseDocument`| `file` | **Required**. Upload copy of working license (png/pdf/..)  |

#### Request Password Reset OTP

```http
POST /api/guest/requestPasswordResetOTP
```
| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `email`   | `string` | **Required**. Email address    |

#### Reset Password with OTP

```http
POST /api/guest/resetPasswordWithOTP
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `email`        | `string` | **Required**. Email address          |
| `otp`          | `string` | **Required**. One-Time Password (OTP) |
| `newPassword`  | `string` | **Required**. New password for the user |

### Patient API
**Note**: All the following routes requires the patient to be logged in. Upon logging in the patient username gets stored in the cookies to be used in each route.
#### Logout

```http
GET /api/patient/logout
```
#### Change Password

```http
POST /api/patient/changePassword
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `currentPassword`        | `string` | **Required**. Old Password          |
| `newPassword`          | `string` | **Required**. New Password |
| `confirmPassword `  | `string` | **Required**. Confirmed new Password |

#### View All Orders

```http
GET /api/patient/viewAllOrders
```

#### Check wallet balance

```http
GET /api/patient/checkWalletBalance
```

#### View profile

```http
GET /api/patient/profile
```

#### View medicines

```http
GET /api/patient/viewMedicineInventory
```

#### Search for a medicine

```http
POST /api/patient/searchMedicineByName
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `medicineName`        | `string` | **Required**. Name of medicine|

#### Filter medicines by their medicinal use

```http
POST /api/patient/filterMedicineByMedicinalUse
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `medicinalUse `        | `string` | **Required**. Medicinal use |

#### Cancel an order

```http
POST /api/patient/cancelOrder
```
| Parameter                  | Type     | Description                                      |
| :------------------------- | :------- | :----------------------------------------------- |
| `orderId `                 | `string` | **Required**. ID of order to cancel |

#### Remove item from cart

```http
DELETE /api/patient/removeCartItem
```

| Parameter              | Type     | Description                           |
| :--------------------- | :------- | :------------------------------------ |
| `medicine `        | `string` | **Required**. Medicine name |

#### View cart items

```http
POST /api/patient/viewCartItems
```

#### View addresses

```http
POST /api/patient/viewDeliveryAddresses
```

#### View cart items (2)

```http
POST /api/patient/viewItems
```

#### Add a delivery address

```http
PUT /api/patient/addNewDeliveryAddress
```
| Parameter          | Type     | Description                           |
| :----------------- | :------- | :------------------------------------ |
| `deliveryAddress`      | `string` | **Required**. Address of patient     |

#### Change amount of item in cart

```http
PUT /api/patient/addNewDeliveryAddress
```
| Parameter          | Type     | Description                           |
| :----------------- | :------- | :------------------------------------ |
| `name`      | `string` | **Required**. Name of item     |
| `quantity`      | `string` | **Required**. new quantity    |


#### Checkout cart items

```http
POST /api/patient/checkout
```

| Parameter          | Type     | Description                           |
| :----------------- | :------- | :------------------------------------ |
| `address`      | `string` | **Required**. Address to deliver to     |
| `items`      | `Array` | **Required**.   array of cart items|
| `patientMobileNumber`      | `string` | **Required**.  mobile number of patient    |
| `paymentMethod `      | `string` | **Required**. Wallet/Credit card/cash on delivery    |

#### Add medicine to cart

```http
POST /api/patient/addMedicineToCart
```

| Parameter          | Type     | Description                           |
| :----------------- | :------- | :------------------------------------ |
| `name`      | `string` | **Required**. Medicine name|

#### Add medicine alternatives

```http
POST /api/patient/viewMedicineAlternatives
```

| Parameter          | Type     | Description                           |
| :----------------- | :------- | :------------------------------------ |
| `name`      | `string` | **Required**. Medicine name|

#### View order details

```http
POST /api/patient/viewOrderDetails
```

| Parameter          | Type     | Description                           |
| :----------------- | :------- | :------------------------------------ |
| `orderId`      | `string` | **Required**. ID of order|

#### Start new chat with a pharmacist

```http
POST /api/patient/startNewChat
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `messageContent`     | `number` | **Required**. Message to be sent|


#### Continue chat with pharmacist

```http
POST /api/patient/continueChat
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `messageContent`     | `number` | **Required**. Message to be sent|
| `chatId`     | `number` | **Required**. ID of chat to continue on|


#### View my Chats

```http
GET /api/patient/viewMyChats
```

#### Close chat with pharmacist

```http
POST /api/patient/deleteChat/:chatId
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `chatId`     | `number` | **Required**. ID of chat to close|

### Pharmacist API

**Note**: All the following routes requires the pharmacist to be logged in. Upon logging in the pharmacist username gets stored in the cookies to be used in each route.
#### Logout

```http
GET /api/pharmacist/logout
```
#### Change Password

```http
POST /api/pharmacist/changePassword
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `currentPassword`        | `string` | **Required**. Old Password          |
| `newPassword`          | `string` | **Required**. New Password |
| `confirmPassword `  | `string` | **Required**. Confirmed new Password |

#### View medicines

```http
GET /api/pharmacist/viewMedicineInventory
```

#### Search for a medicine

```http
POST /api/pharmacist/searchMedicineByName
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `medicineName`        | `string` | **Required**. Name of medicine|

#### Filter medicines by their medicinal use

```http
POST /api/pharmacist/filterMedicineByMedicinalUse
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `medicinalUse `        | `string` | **Required**. Medicinal use |

#### Add medicine

```http
POST /api/pharmacist/addMedicine
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `name `        | `string` | **Required**. Name of medicine |
| `activeIngredients `        | `string` | **Required**. ingredients in medicine |
| `medicinalUse `        | `string` | **Required**. Medicinal use |
| `price `        | `number` | **Required**. Price of medicine |
| `description `        | `string` | **Required**. description of medicine |
| `quantity `        | `number` | **Required**. Available quantity |
| `sales `        | `number` | **Required**. How much of this medicine is sold |
| `PrescriptionNeeded `        | `boolean` | **Required**. Whether it needs a prescription or not |
| `image `        | `file` | **Required**. Image for medicine |

#### Edit medicine

```http
PATCH /api/pharmacist/editMedicine
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `name `        | `string` | **Required**. Name of medicine |
| `activeIngredients `        | `string` | **Required**. ingredients in medicine |
| `medicinalUse `        | `string` | **Required**. Medicinal use |
| `price `        | `number` | **Required**. Price of medicine |
| `description `        | `string` | **Required**. description of medicine |
| `quantity `        | `number` | **Required**. Available quantity |
| `sales `        | `number` | **Required**. How much of this medicine is sold |
| `PrescriptionNeeded `        | `boolean` | **Required**. Whether it needs a prescription or not |
| `image `        | `file` | **Required**. Image for medicine |

#### View medicine inventory (including archived or sold out medicines)

```http
GET /api/pharmacist/viewMedicineInventoryPharmacist
```

#### View all chats

```http
GET /api/pharmacist/viewAllChats
```
#### Get Out Of Stock Medicines

```http
GET /api/pharmacist/getOutOfStockMedicines
```

#### Check Wallet Balance

```http
GET /api/pharmacist/checkWalletBalance
```

#### Send chat 

```http
POST /api/pharmacist/sendMessageToChat
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `messageContent`     | `string` | **Required**. Message to be sent|
| `chatId`     | `string` | **Required**. ID of chat|

#### Unarchive medicine

```http
POST /api/pharmacist/unarchiveMedicine
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `medicineName `     | `string` | **Required**. Name of medicine|

#### Archive medicine

```http
POST /api/pharmacist/archiveMedicine
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `medicineName `     | `string` | **Required**. Name of medicine|

#### Start new chat with a pharmacist

```http
POST /api/pharmacist/startNewChat
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `messageContent`     | `string` | **Required**. Message to be sent|
| `selectedDoctor`     | `string` | **Required**. Doctor to chat with|

#### View my chats + any chat request from patients

```http
GET /api/pharmacist/viewMyChats
```

#### Continue chat 

```http
POST /api/pharmacist/continueChat
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `messageContent`     | `string` | **Required**. Message to be sent|
| `chatId`     | `string` | **Required**. ID of chat|


#### Close chat 

```http
DELETE /api/pharmacist/deleteChat/:chatId
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `chatId`     | `string` | **Required**. ID of chat|

#### View Profile

```http
GET /api/pharmacist/profile
```

#### Generate Sales Report 

```http
POST /api/pharmacist/generateSalesReport
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `chosenMonth `     | `string` | **Required**. Month to generate sales report to|

#### Filter Sales Report 

```http
POST /api/pharmacist/filterSalesReport
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `medicineName `     | `string` | **Required**. Filter by medicine name|
| `saleDate `     | `string` | **Required**. Filter by a sale date|

#### Send message to doctor

```http
POST /api/pharmacist/sendMessageToDoctor
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `messageContent`     | `string` | **Required**. Message to be sent|
| `chatId`     | `string` | **Required**. ID of chat|

#### View chats with doctors

```http
GET /api/pharmacist/viewAllChatsToDoctor
```

#### View chats with doctors (2)

```http
POST /api/pharmacist/ChatsToDoctor
```

#### Remove out of stock medicine Notification

```http
POST /api/pharmacist/removeOutOfStockMedicine
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `medicineName `     | `string` | **Required**. Medicine name|

### Administrator API
**Note**: All the following routes requires the admin to be logged in. Upon logging in the admin username gets stored in the cookies to be used in each route.
#### Logout

```http
GET /api/administrator/logout
```
#### Change Password

```http
POST /api/administrator/changePassword
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `currentPassword`        | `string` | **Required**. Old Password|
| `newPassword`          | `string` | **Required**. New Password |
| `confirmPassword `  | `string` | **Required**. Confirmed new Password |

#### View Profile

```http
GET /api/administrator/profile
```

#### Add an administrator

```http
POST /api/administrator/addAdministrator
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `email`        | `string` | **Required**. Email of admin|
| `username`          | `string` | **Required**. Username of admin|
| `password `  | `string` | **Required**. Password of admin |


#### Delete a user

```http
DELETE /api/administrator/removeUserFromSystem
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `username`        | `string` | **Required**. Username of user to delete|

#### View Doctor Application

```http
GET /api/administrator/viewPharmacistApplication
```

#### View pharmacist information

```http
POST /api/administrator/viewPharmacistInformation
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `pharmacistUsername`        | `string` | **Required**. Username of pharmacist|

#### View patient information

```http
POST /api/administrator/viewPatientInformation
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `patientUsername`        | `string` | **Required**. Username of patient|

#### View medicines

```http
GET /api/administrator/viewMedicineInventory
```

#### Search for a medicine

```http
POST /api/administrator/searchMedicineByName
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `medicineName`        | `string` | **Required**. Name of medicine|

#### Filter medicines by their medicinal use

```http
POST /api/administrator/filterMedicineByMedicinalUse
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `medicinalUse `        | `string` | **Required**. Medicinal use |


#### Approve a Pharmacist Registration Request

```http
POST /api/administrator/approvePharmacistRequest
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `username`        | `string` | **Required**. Username of doctor |

#### Reject a Doctor Registration Request

```http
POST /api/administrator/rejectPharmacistRequest
```
| Parameter      | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `username`        | `string` | **Required**. Username of doctor |

#### Generate Sales Report 

```http
POST /api/administrator/generateSalesReport
```
| Parameter               | Type   | Description                                    |
| :---------------------- | :----- | :--------------------------------------------- |
| `chosenMonth `     | `string` | **Required**. Month to generate sales report to|
## Running Tests

To run tests to make sure the routes are working fine, download [Postman](https://www.postman.com/downloads/) software for free.

//screen shots of postman?


## How to Use?
Open git bash/ or any terminal in a directory of your choice and do: 
```bash
  git clone **paste the github clone link here**
```
Open a terminal inside the project directory and do the following:
```bash
  cd backend
  npm install
  cd ..
  cd frontend
  npm install
```
To run the project, you need to open two terminals, in the first one:
```bash
  cd backend
  cd src
  nodemon app.js OR node app.js
```
In the second one:
```bash
  cd frontend
  npm start
```
Then try using the website by registering as a patient and immediately getting access to the patient dashboard!
## Contributing

Public Contributions are unfortunately not welcome yet as per this project's team decision; this project is still private.


## Credits
Full credit goes to [NetNinja](https://www.youtube.com/@NetNinja) youtube channel for their wonderful playlist on [MERN Stack](https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=1&ab_channel=NetNinja) with the most thorough explanation on the framework.

## Authors

- [@minatamer](https://github.com/minatamer)
- [@BasselTharwat](https://github.com/BasselTharwat)
- [@rawanfarouq](https://github.com/rawanfarouq)
- [@mayamokhtarr](https://github.com/mayamokhtarr)
- [@shahdsharaf](https://github.com/shahdsharaf)
- [@toniskander](https://github.com/toniskander)
- [@hayaelsarraf](https://github.com/hayaelsarraf)
- [@ragyihab](https://github.com/ragyihab)


## License

Apache 2.0 license 


