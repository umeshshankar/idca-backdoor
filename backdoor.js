/* 
 * Create a payment form, populate the form with backdoor credentials, 
 * submit the form to process a backdoor transaction automatically.
 * 
 */

(function () {

        // Create a payment form to process a backdoor transaction
        var paymentFormSection = document.getElementById("backdoor-payment-form");
        var paymentForm = document.createElement('form'); // Create new Form element
        paymentForm.setAttribute("id", "ancillaryForm");
        paymentForm.setAttribute("hidden", "");
        paymentFormSection.appendChild(paymentForm);

        var creditcardTypesSelectElement = document.createElement('select'); // Create Drop-Down Field for CreditCard Type
        creditcardTypesSelectElement.setAttribute("name", "cardType");
        creditcardTypesSelectElement.setAttribute("id", "cardType");

        // Add Credit Card Type Options to the Select Element
        creditcardTypesSelectElement.appendChild(new Option("Select Credit Card", "UNKNOWN"));
        creditcardTypesSelectElement.appendChild(new Option("Visa", "VISA"));
        creditcardTypesSelectElement.appendChild(new Option("Master Card", "MASTERCARD"));

        paymentForm.appendChild(creditcardTypesSelectElement);

        var firstNameInputElement = document.createElement('input'); // Create Input Field for First Name
        firstNameInputElement.setAttribute("type", "text");
        firstNameInputElement.setAttribute("name", "firstname");
        firstNameInputElement.setAttribute("id", "firstname");
        paymentForm.appendChild(firstNameInputElement);

        var lastInputElement = document.createElement('input'); // Create Input Field for Last Name
        lastInputElement.setAttribute("type", "text");
        lastInputElement.setAttribute("name", "lastname");
        lastInputElement.setAttribute("id", "lastname");
        paymentForm.appendChild(lastInputElement);

        var creditcardNumberInputElement = document.createElement('input'); // Create Input Field for Credit Card Number
        creditcardNumberInputElement.setAttribute("type", "text");
        creditcardNumberInputElement.setAttribute("name", "CARDNUM");
        creditcardNumberInputElement.setAttribute("id", "CARDNUM");
        paymentForm.appendChild(creditcardNumberInputElement);

        var creditcardExpMonthSelectElement = document.createElement('select'); // Create Drop-Down Field for Expiration Month
        creditcardExpMonthSelectElement.setAttribute("name", "month")
        creditcardExpMonthSelectElement.setAttribute("id", "month")

        // Add Month Options to the Select Element
        creditcardExpMonthSelectElement.appendChild(new Option("", "Month"));
        creditcardExpMonthSelectElement.appendChild(new Option("Jan", "01"));
        creditcardExpMonthSelectElement.appendChild(new Option("Feb", "02"));
        creditcardExpMonthSelectElement.appendChild(new Option("Mar", "03"));
        creditcardExpMonthSelectElement.appendChild(new Option("Apr", "04"));
        creditcardExpMonthSelectElement.appendChild(new Option("May", "05"));
        creditcardExpMonthSelectElement.appendChild(new Option("Jun", "06"));
        creditcardExpMonthSelectElement.appendChild(new Option("Jul", "07"));
        creditcardExpMonthSelectElement.appendChild(new Option("Aug", "08"));
        creditcardExpMonthSelectElement.appendChild(new Option("Sep", "09"));
        creditcardExpMonthSelectElement.appendChild(new Option("Oct", "10"));
        creditcardExpMonthSelectElement.appendChild(new Option("Nov", "11"));
        creditcardExpMonthSelectElement.appendChild(new Option("Dec", "12"));

        paymentForm.appendChild(creditcardExpMonthSelectElement);

        var creditcardExpYearSelectElement = document.createElement('select'); // Create Drop-Down Field for Expiration Year
        creditcardExpYearSelectElement.setAttribute("name", "year");
        creditcardExpYearSelectElement.setAttribute("id", "year");

        // Add Year Options to the Select Element
        creditcardExpYearSelectElement.appendChild(new Option("", "Year"));
        creditcardExpYearSelectElement.appendChild(new Option("2016", "2016"));
        creditcardExpYearSelectElement.appendChild(new Option("2017", "2017"));
        creditcardExpYearSelectElement.appendChild(new Option("2018", "2018"));
        creditcardExpYearSelectElement.appendChild(new Option("2019", "2019"));
        creditcardExpYearSelectElement.appendChild(new Option("2020", "2020"));
        creditcardExpYearSelectElement.appendChild(new Option("2021", "2021"));
        creditcardExpYearSelectElement.appendChild(new Option("2022", "2022"));
        creditcardExpYearSelectElement.appendChild(new Option("2023", "2023"));
        creditcardExpYearSelectElement.appendChild(new Option("2024", "2024"));
        creditcardExpYearSelectElement.appendChild(new Option("2025", "2025"));

        paymentForm.appendChild(creditcardExpYearSelectElement);

        var securityCodeInputElement = document.createElement('input'); // Create Input Field for Security Code
        securityCodeInputElement.setAttribute("type", "text");
        securityCodeInputElement.setAttribute("name", "CIN");
        securityCodeInputElement.setAttribute("id", "CIN");
        paymentForm.appendChild(securityCodeInputElement);

        var addressLine1InputElement = document.createElement('input'); // Create Input Field for Address Line 1
        addressLine1InputElement.setAttribute("type", "text");
        addressLine1InputElement.setAttribute("name", "ADDRESS1");
        addressLine1InputElement.setAttribute("id", "ADDRESS1");
        paymentForm.appendChild(addressLine1InputElement);

        var addressLine2InputElement = document.createElement('input'); // Create Input Field for Address Line 2
        addressLine2InputElement.setAttribute("type", "text");
        addressLine2InputElement.setAttribute("name", "ADDRESS2");
        addressLine2InputElement.setAttribute("id", "ADDRESS2");
        paymentForm.appendChild(addressLine2InputElement);

        var countrySelectElement = document.createElement('select'); // Create Drop-Down Field for Billing Country
        countrySelectElement.setAttribute("name", "country");
        countrySelectElement.setAttribute("id", "country");

        // Add Country Options to the Select Element
        countrySelectElement.appendChild(new Option("", "Select a Country"));
        countrySelectElement.appendChild(new Option("Canada", "CA"));
        countrySelectElement.appendChild(new Option("United States of America", "US"));

        paymentForm.appendChild(countrySelectElement);

        var stateSelectElement = document.createElement('select'); // Create Drop-Down Field for Billing State
        stateSelectElement.setAttribute("name", "STATE");
        stateSelectElement.setAttribute("id", "STATE");

        // Add State Options to the Select Element
        stateSelectElement.appendChild(new Option("", "Select a State or Province"));
        stateSelectElement.appendChild(new Option("AB Alberta", "AB"));
        stateSelectElement.appendChild(new Option("CA California", "CA"))

        paymentForm.appendChild(stateSelectElement);

        var cityInputElement = document.createElement('input'); // Create Input Field for City
        cityInputElement.setAttribute("type", "text");
        cityInputElement.setAttribute("name", "CITY");
        cityInputElement.setAttribute("id", "CITY");
        paymentForm.appendChild(cityInputElement);

        var postalCodeInputElement = document.createElement('input'); // Create Input Field for Postal Code
        postalCodeInputElement.setAttribute("type", "text");
        postalCodeInputElement.setAttribute("name", "ZIP");
        postalCodeInputElement.setAttribute("id", "ZIP");
        paymentForm.appendChild(postalCodeInputElement);

        //Create all the required hidden parameters for a backdoor transaction
        var amountHiddenElement = document.createElement('input');
        amountHiddenElement.setAttribute("type", "hidden");
        amountHiddenElement.setAttribute("name", "amount");
        amountHiddenElement.setAttribute("id", "amount");
        paymentForm.appendChild(amountHiddenElement);

        var originalAmountHiddenElement = document.createElement('input');
        originalAmountHiddenElement.setAttribute("type", "hidden");
        originalAmountHiddenElement.setAttribute("name", "originalAmount");
        originalAmountHiddenElement.setAttribute("id", "originalAmount");
        paymentForm.appendChild(originalAmountHiddenElement);

        var amountHashHiddenElement = document.createElement('input');
        amountHashHiddenElement.setAttribute("type", "hidden");
        amountHashHiddenElement.setAttribute("name", "amountHash");
        amountHashHiddenElement.setAttribute("id", "amountHash");
        paymentForm.appendChild(amountHashHiddenElement);

        var applicationHiddenElement = document.createElement('input');
        applicationHiddenElement.setAttribute("type", "hidden");
        applicationHiddenElement.setAttribute("name", "application");
        applicationHiddenElement.setAttribute("id", "application");
        paymentForm.appendChild(applicationHiddenElement);
        
        var orderNumberfield = document.createElement('input');
        orderNumberfield.setAttribute("type", "hidden");
        orderNumberfield.setAttribute("name", "orderNumber");
        orderNumberfield.setAttribute("id", "orderNumber");
        paymentForm.appendChild(orderNumberfield);

        var stageNamefield = document.createElement('input');
        stageNamefield.setAttribute("type", "hidden");
        stageNamefield.setAttribute("name", "stageName");
        stageNamefield.setAttribute("id", "stageName");
        paymentForm.appendChild(stageNamefield);

        var hashDatafield = document.createElement('input');
        hashDatafield.setAttribute("type", "hidden");
        hashDatafield.setAttribute("name", "hashData");
        hashDatafield.setAttribute("id", "hashData");
        paymentForm.appendChild(hashDatafield);
        

        // Populate backdoor payment credentials to the payment form and submit it
        document.getElementById('ancillaryForm').setAttribute('action', '/payment/processccpayment.do');
        document.getElementById('ancillaryForm').setAttribute('method', 'POST');
        document.getElementById('cardType').options[1].setAttribute('selected', 'selected');
        document.getElementById('firstname').setAttribute('value', 'Backdoor');
        document.getElementById('lastname').setAttribute('value', 'Test');
        document.getElementById('CARDNUM').setAttribute('value', '4111111111111111');
        document.getElementById('month').options[9].setAttribute('selected', 'selected');
        document.getElementById('month').options[9].setAttribute('value', '09');
        document.getElementById('year').options[4].setAttribute('selected', 'selected');
        document.getElementById('CIN').setAttribute('value', '000');
        document.getElementById('ADDRESS1').setAttribute('value', 'Test Address Line 1');
        document.getElementById('ADDRESS2').setAttribute('value', 'Test Address Line 2');
        document.getElementById('country').options[1].setAttribute('selected', 'selected');
        document.getElementById('STATE').options[1].setAttribute('selected', 'selected');
        document.getElementById('CITY').setAttribute('value', 'City');
        document.getElementById('ZIP').setAttribute('value', '12345');

        // Populate all the hidden fields created with appropriate values
        document.getElementById('amount').setAttribute('value', document.getElementById('amt').value);
        document.getElementById('originalAmount').setAttribute('value', document.getElementById('orgAmt').value);
        document.getElementById('amountHash').setAttribute('value', document.getElementById('amtHash').value);
        document.getElementById('application').setAttribute('value', document.getElementById('applicationName').value);
        document.getElementById('orderId').setAttribute('value', document.getElementById('orderId').value);
        document.getElementById('stageName').setAttribute('value', document.getElementById('stageName').value);
        document.getElementById('hashData').setAttribute('value', document.getElementById('hashData').value);

        // Submit the payment form
        document.getElementById('ancillaryForm').submit();
})();
