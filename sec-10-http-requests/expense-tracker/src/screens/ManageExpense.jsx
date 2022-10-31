import {StyleSheet, View} from "react-native";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import IconButton from "../components/common/IconButton";
import {GlobalStyles} from "../constants/styles";
import {addExpense, deleteExpense, updateExpense} from "../store/expenses";
import ExpenseForm from "../components/manage-expense/ExpenseForm";
import {deleteExpenseAxios, storeExpenseAxios, updateExpenseAxios} from "../utils/http";
import LoadingOverlay from "../components/common/LoadingOverlay";
import ErrorOverlay from "../components/common/ErrorOverlay";

const ManageExpense = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const selectedExpense = useSelector((state) => state.expenses.expenses.find((expense) => {
    return expense.id === editedExpenseId
  }));

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    setIsLoading(true);

    try {
      await deleteExpenseAxios(editedExpenseId);
      dispatch(deleteExpense({id: editedExpenseId}));
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense - please try again later!');
      setIsLoading(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    try {
      if (isEditing) {
        setIsLoading(true);
        await updateExpenseAxios(editedExpenseId, expenseData);
        dispatch(updateExpense({
          id: editedExpenseId,
          data: expenseData
        }));
      } else {
        setIsLoading(true);
        const id = await storeExpenseAxios(expenseData);
        dispatch(addExpense({id: id, ...expenseData}));
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save data - please try again later!");
      setIsLoading(false);
    }
  };

  if (error && !isLoading) {
    return <ErrorOverlay message={error}/>
  }

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
          submitBtnLabel={isEditing ? "Update" : "Add"}
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
          defaultExpense={selectedExpense}
      />

      {isEditing && (
        <View style={styles.trashContainer}>
          <IconButton
              name="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  trashContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  }
});
