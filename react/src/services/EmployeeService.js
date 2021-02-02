import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8765/employee/list";
const EMPLOYEE_API_ADD_URL = "http://localhost:8765/employee/add";

class EmployeeService {
    getEmployee() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_ADD_URL, employee);
    }
    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}
export default new EmployeeService();