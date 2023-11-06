
const Patient = require('../Models/patientModel');
const Medicine = require('../Models/medicineModel');
const Order= require ('../Models/orderModel');
const { viewMedicineInventory, filterMedicineByMedicinalUse, searchMedicineByName } = require('./medicineController');

const viewCartItems = async (req, res) => {
  try {
    const patientUsername = req.params.patientUsername; // Get the patient's username from the request
    const patient = await Patient.findOne({ username: patientUsername });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const cartItems = patient.cart; // Access the cart property

    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error viewing cart items' });
  }
};

// Add a route to remove an item from the cart
const removeCartItem = async (req, res) => {
  try {
    // Get the patient username from the request parameters
    const patientUsername = req.params.patientUsername;

    // Get the medicine name from the request parameters
    const medicineName = req.params.medicineName; 
    
    // Find the patient with the matching username in the database
    const patient = await Patient.findOne({ username: patientUsername });

    // Check if the patient exists
    if (!patient) {
      // Return a 404 response if the patient is not found
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Find the index of the item in the patient's cart with the matching medicine name
    const itemIndex = patient.cart.findIndex((item) => item.name === medicineName);

    // Check if the medicine item is not found in the patient's cart
    if (itemIndex === -1) {
      // Return a 404 response if the medicine is not found in the cart
      return res.status(404).json({ message: 'Medicine not found in the cart' });
    }

    // Remove the item with the matching medicine name from the patient's cart
    patient.cart.splice(itemIndex, 1);

    // Save the updated patient information to the database
    await patient.save();

    // Return a 200 response to indicate successful removal of the medicine from the cart
    res.status(200).json({ message: 'Medicine removed from the cart' });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ message: 'Error removing medicine from the cart' });
  }
};
const cancelOrder = async (req, res) => {
  try {
    const username = req.params.username; // Assuming you can get the username from the request
    const orderId = req.params.orderId;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.patientUsername !== username) {
      return res.status(403).json({ message: 'Permission denied. This order does not belong to the patient.' });
    }

    // Update the order status to "Cancelled"
    order.status = 'Cancelled';
    await order.save();

    res.status(200).json({ message: 'Order canceled' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error canceling the order' });
  }
};




const viewDeliveryAdresses = async (req, res) => {
  try {
    const patientUsername = req.query.patientUsername;
    const patient = await Patient.findOne({username:patientUsername});
    if (!patient ) {
      return res.status(404).json({ message: 'No available delivery Adresses found.' });
    }
    res.status(200).json(patient.deliveryAddresses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching delivery addresses' });
  }
};
const AddNewDeliveryAdress = async (req, res) => {
  try{
  const patientUsername = req.query.patientUsername;
  const patient = await Patient.findOne({username:patientUsername});
  const deliveryAddresses=patient.deliveryAddresses
  var arrayOfAddresses = req.body.deliveryAddress.split("%");
  for(let i=0;i<arrayOfAddresses.length-1;i++){
        deliveryAddresses.push(arrayOfAddresses[i])
      
  }
        const updatePatient = await Patient.findOneAndUpdate(
          { username: patientUsername },
          { deliveryAddresses},
          { new: true }
        );
        if (!updatePatient) {
          return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(updatePatient);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding new Address' });
      }
};
const changeAmountOfAnItem = async (req, res) => {
  try{
  const patientUsername = req.query.patientUsername;
  const patient = await Order.findOne({patientUsername:patientUsername});
  const items=patient.items;
  
  let index=items.findIndex(item => item.name === req.query.name)
  items[index].quantity=req.query.quantity
  const updateItems = await Order.findOneAndUpdate(
    { patientUsername: patientUsername },
    { items},
    { new: true }
  );
  if (!updateItems) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.status(200).json(updateItems);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Error updating quantity of an item' });
}
};

const addMedicineToCart = async (req, res) => {
  try {
    const username = req.body.username; // Get the patient's username from the request
    const patient = await Patient.findOne({ username: username });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const name = req.body.medicineName; // Assuming you receive the OTC medicine's name in the request body

    const medicine = await Medicine.findOne({ name: name });

    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    // Check if the medicine is OTC (over the counter)
    if (!medicine.PrescriptionNeeded) {
      // Create a cart item with the medicine's details
      const cartItem = {
        medicine: medicine._id, // Store the medicine's ID
        name: medicine.name,
        price: medicine.price,
        quantity: 1, // You can set an initial quantity
      };

      // Add the cart item to the patient's cart
      patient.cart.push(cartItem);

      // Save the updated patient information to the database
      await patient.save();

      res.status(200).json({ message: 'Medicine added to the cart' });
    } else {
      res.status(400).json({ message: 'Prescription is needed for this medicine' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding medicine to the cart' });
  }
};
const viewItems = async (req, res) => {
  try {
    const patientUsername = req.query.patientUsername; // Get the patient's username from the request
    const patient = await Patient.findOne({ username: patientUsername });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const cartItems = patient.cart; // Access the cart property

    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error viewing cart items' });
  }
};
const checkout = async (req, res) => {
  try {
    const orderDate = new Date();
    const patientUsername=req.query.patientUsername;
    const givenPatient = await Patient.findOne({ username: patientUsername });
    const patient=givenPatient._id;  
    const status="Pending";
    const { address,items,patientMobileNumber,paymentMethod,total } = req.body;
    for(let i=0;i<items.length;i++){
    const givenMedicine = await Medicine.findOne({ name:items[i].name });
    items[i].medicine=givenMedicine._id
    }
    const newOrder = new Order({ total,paymentMethod,address,items,orderDate,
      patientMobileNumber,patientUsername,status,patient });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error checkout' });
  }
};






module.exports = { checkout,viewItems, viewMedicineInventory, 
  filterMedicineByMedicinalUse, searchMedicineByName, 
  viewCartItems, removeCartItem, cancelOrder,changeAmountOfAnItem,
  viewDeliveryAdresses,AddNewDeliveryAdress ,addMedicineToCart}; 