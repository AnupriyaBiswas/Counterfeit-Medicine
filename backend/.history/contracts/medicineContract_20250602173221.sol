// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicineContract {
    address public owner;

    struct Manufacturer {
        string name;
        string location;
        bool isRegistered;
    }

    struct Medicine {
        string name;
        string batchId;
        uint timestamp;
        address manufacturer;
    }

    mapping(address => Manufacturer) public manufacturers;
    mapping(string => Medicine) public medicines;

    constructor() {
        owner = msg.sender;
    }

    function registerManufacturer(string memory _name, string memory _location) public {
        manufacturers[msg.sender] = Manufacturer(_name, _location, true);
    }

    function createMedicine(string memory _name, string memory _batchId) public {
        require(manufacturers[msg.sender].isRegistered, "Manufacturer not registered");
        medicines[_batchId] = Medicine(_name, _batchId, block.timestamp, msg.sender);
    }

    function verifyMedicine(string memory _batchId) public view returns (Medicine memory) {
        require(bytes(medicines[_batchId].batchId).length != 0, "Medicine not found");
        return medicines[_batchId];
    }
}
