import LoginPage from '../Pages/LoginPage'
import SwingpayLoginPage from '../PageObjects/Login'
import HolidayList from '../Pages/HolidayList'
import LeaveRequest from '../Pages/LeaveRequestPage'
import ESR from '../Pages/ESR'
import Dashboard from '../Pages/Dashboard'
import ChangePassword from '../Pages/ChangePassword'
import CreateESR from '../Pages/CreateESR'
import CreateTimesheet from '../Pages/CreateTimesheet'
import MyTimesheets from '../Pages/MyTimesheets'
import ExpensesList from '../Pages/ExpensesList'
import MyprofilePage from '../Pages/MyprofilePage'
import NewsandEvents from '../Pages/NewsandEvents'
import Payslips from '../Pages/Payslips'
import MyDocuments from '../Pages/MyDocumentsPage'
import Forgotpassword from '../Pages/forgotpassword'
import AddExpenses from '../Pages/AddExpenses'
import {test as baseTest} from '@playwright/test'
import Logout from '../Pages/Logout'
import NewPayslips from '../Pages/NewPayslips'
import loginpage from '../PageFiles/AccountantLoginPage'
import Dashboardpage from '../PageFiles/DashboardPage'
import CustomInvoice from '../PageFiles/CustomInvoice'
import CustomInvoiceList from '../PageFiles/CustomInvoiceList'
import GenerateInvoice from '../PageFiles/GenerateInvoice'
import ReceivedInvoiceList from '../PageFiles/ReceivedInvoiceList'
import SearchInvoice from '../PageFiles/SearchInvoice'
import SearchByDate from '../PageFiles/SearchbyDate'
import SearchByStatus from '../PageFiles/SearchByStatus'
import SearchByEmployee from '../PageFiles/SearchByEmployee'
import SearchByClient from '../PageFiles/SearchByClient'
import ExpensesInvoice from '../PageFiles/ExpensesInvoice'
import ExpensesList1 from '../PageFiles/ExpensesList'
import DialogAlerts from '../PageFiles/Dialogalerts'
import CreateExpenseInvoice from '../PageFiles/CreateExpenseInvoice'
import Reports from '../PageFiles/Reports'
import Payroll from '../PageFiles/Payroll'


const test = baseTest.extend<{
    loginPage: LoginPage;
    dashboard: Dashboard;
    logoutpage:Logout
    holidaylist: HolidayList;
    leaverequest:LeaveRequest;
    esr:ESR;
    changepassword:ChangePassword;
    createesr:CreateESR;
    createtimesheet:CreateTimesheet;
    mytimesheets: MyTimesheets;
    expenseslist:ExpensesList;
    myprofile:MyprofilePage;
    mydocuments:MyDocuments;
    newsandevents:NewsandEvents;
    payslips1:Payslips;
    addexpenses: AddExpenses;
    forgotpassword:Forgotpassword;
    logout:Logout;
    newpayslip:NewPayslips;
    loginpage1:loginpage
    dashboard1:Dashboardpage
    customeinvoice:CustomInvoice;
    customeinvoicelist:CustomInvoiceList;
    generateinvoice:GenerateInvoice
    Receivedinvoicelist:ReceivedInvoiceList;
    Searchinvoice:SearchInvoice;
    searchbydate1:SearchByDate;
    searchbystatus1:SearchByStatus
    searchbyemployee1:SearchByEmployee;
    searchbyclient1:SearchByClient;
    expensesinvoice1:ExpensesInvoice
    expenseslist1:ExpensesList1
    dialogalerts:DialogAlerts;
    createExpensesInvoices1:CreateExpenseInvoice;
    reports1:Reports;
    payroll1:Payroll;
    swingpayloginpage:SwingpayLoginPage;
   
  }>({
    loginPage: async ({ page }, use) => {
      await use(new LoginPage(page));
    },
    dashboard: async ({ page }, use) => {
      await use(new Dashboard(page));
    },
    changepassword: async ({ page }, use) => {
      await use(new ChangePassword(page));
    },
    createesr: async ({ page }, use) => {
      await use(new CreateESR(page));
    },
    createtimesheet: async ({ page }, use) => {
      await use(new CreateTimesheet(page));
       
    },
    mytimesheets: async ({ page }, use) => {
      await use(new MyTimesheets(page));
    },
    expenseslist: async ({ page }, use) => {
      await use(new ExpensesList(page));
    },
    logoutpage: async ({ page }, use) => {
      await use(new Logout(page));
    },
    newpayslip: async ({ page }, use) => {
      await use(new NewPayslips(page));
    },
    holidaylist: async ({ page }, use) => {
      await use(new HolidayList(page));
    },
    leaverequest: async ({ page }, use) => {
      await use(new LeaveRequest(page));
    },
    myprofile: async ({ page }, use) => {
      await use(new MyprofilePage(page));
    },
    newsandevents: async ({ page }, use) => {
      await use(new NewsandEvents(page));
    },
    payslips1: async ({ page }, use) => {
      await use(new Payslips(page));
    },
    addexpenses: async ({ page }, use) => {
      await use(new AddExpenses(page));
    },
    esr: async ({ page }, use) => {
      await use(new ESR(page));
    },
    forgotpassword: async ({ page }, use) => {
      await use(new Forgotpassword(page));
    },
    logout: async ({ page }, use) => {
      await use(new Logout(page));
    },
    loginpage1: async ({ page }, use) => {
      await use(new loginpage(page));
    },
    dashboard1: async ({ page }, use) => {
      await use(new Dashboardpage(page));
    },
    customeinvoice: async ({ page }, use) => {
      await use(new CustomInvoice(page));
    },
    customeinvoicelist: async ({ page }, use) => {
      await use(new CustomInvoiceList(page));
    },
    generateinvoice: async ({ page }, use) => {
      await use(new GenerateInvoice(page));
    },
    Receivedinvoicelist: async ({ page }, use) => {
      await use(new ReceivedInvoiceList(page));
    },
    Searchinvoice: async ({ page }, use) => {
      await use(new SearchInvoice(page));
    },
    searchbydate1: async ({ page }, use) => {
      await use(new SearchByDate(page));
    },
    searchbystatus1: async ({ page }, use) => {
      await use(new SearchByStatus(page));
    },
    searchbyemployee1: async ({ page }, use) => {
      await use(new SearchByEmployee(page));
    },
    searchbyclient1: async ({ page }, use) => {
      await use(new SearchByClient(page));
    },
    expensesinvoice1: async ({ page }, use) => {
      await use(new ExpensesInvoice(page));
    },
    expenseslist1: async ({ page }, use) => {
      await use(new ExpensesList1(page));
    },
    dialogalerts: async ({ page }, use) => {
      await use(new DialogAlerts(page));
    },
    createExpensesInvoices1: async ({ page }, use) => {
      await use(new CreateExpenseInvoice(page));
    },
    reports1: async ({ page }, use) => {
      await use(new Reports(page));
    },
    mydocuments: async ({ page }, use) => {
      await use(new MyDocuments(page));
    },
    payroll1: async ({ page }, use) => {
      await use(new Payroll(page));
    },
    swingpayloginpage: async ({ page }, use) => {
      await use(new SwingpayLoginPage(page));
    },

  })
  export default test;
  export const expect =test.expect;