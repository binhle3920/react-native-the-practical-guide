import {StyleSheet, Text, View} from "react-native";
import React from "react";
import IconButton from "../components/common/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../components/common/Button";
import {useDispatch} from "react-redux";
import {addExpense, deleteExpense, updateExpense} from "../store/expenses";

const ManageExpense = ({route, navigation}) => {
  const dispatch = useDispatch();

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    dispatch(deleteExpense({id: editedExpenseId}));
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      dispatch(
          updateExpense({
            id: editedExpenseId,
            data: {
              description: "Test!!!",
              amount: 19.53,
              date: new Date('2022-10-25')
            }
          })
      )
    } else {
      dispatch(addExpense({
        description: "Test!!!",
        amount: 19.53,
        date: new Date('2022-10-25')
      }))
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing ? "Update" : "Add"}</Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  trashContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  }
});
