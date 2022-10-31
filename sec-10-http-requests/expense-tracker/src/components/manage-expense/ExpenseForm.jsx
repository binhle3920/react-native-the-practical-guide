import {Alert, StyleSheet, Text, View} from "react-native";
import React from "react";

import Input from "./Input";
import {GlobalStyles} from "../../constants/styles";
import Button from "../common/Button";
import {getFormattedDate} from "../../utils/date";


const ExpenseForm = ({submitBtnLabel, onCancel, onSubmit, defaultExpense}) => {
  const [inputs, setInputs] = React.useState({
    amount: {
      value: defaultExpense ? defaultExpense.amount.toString() : '',
      isValid: true
    },
    date: {
      value: defaultExpense ? getFormattedDate(defaultExpense.date) : '',
      isValid: true
    },
    description: {
      value: defaultExpense ? defaultExpense.description : '',
      isValid: true
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: { value: enteredValue, isValid: true }
      }
    })
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value
    }

    const isValidAmount = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isValidDate = expenseData.date.toString() !== "Invalid Date";
    const isValidDescription = expenseData.description.trim().length > 0;

    if (!isValidDescription || !isValidDate || !isValidAmount) {
      // Alert.alert("Invalid input!", "Please check your input values");
      setInputs((prevState) => {
        return {
          amount: {
            value: prevState.amount.value, isValid: isValidAmount
          },
          date: {
            value: prevState.date.value, isValid: isValidDate
          },
          description: {
            value: prevState.description.value, isValid: isValidDescription
          }
        }
      })
      return;
    }

    onSubmit(expenseData);
  }

  const isInvalidForm = (
      !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid
  );

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
            style={styles.rowInput}
            label="Amount"
            invalid={!inputs.amount.isValid}
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"),
              value: inputs.amount.value
            }}
        />

        <Input
            style={styles.rowInput}
            label="Date"
            invalid={!inputs.date.isValid}
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: inputChangeHandler.bind(this, "date"),
              value: inputs.date.value
            }}
        />
      </View>

      <Input
          label="Description"
          invalid={!inputs.description.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            multiline: true,
            autoCorrect: false,
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputs.description.value
          }}
      />

      {isInvalidForm && <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>}

      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
        <Button style={styles.button} onPress={submitHandler}>{submitBtnLabel}</Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.white,
    marginVertical: 24,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500
  }
});
