const Employee = require('../models/Employee');

const createEmployee = async (req, res) => {
  try {
    const { collegeRegistrationNumber, studentName, rank, section } = req.body;

    const employee = new Employee({
      collegeRegistrationNumber,
      studentName,
      rank,
      section
    });

    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error creating employee" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employees" });
  }
};
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error updating employee" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting employee" });
  }
};

module.exports = {createEmployee,getEmployees,updateEmployee,deleteEmployee};
