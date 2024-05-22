import React, { useState, useCallback, useMemo } from "react";
import { useAppContext } from "./AppContext";
const MOCK_OPTIONS = ["a", "b", "c", "d"];

function DataForm() {
  const [form, setForm] = useState({});
  const { addNewData } = useAppContext();

  const onChange = useCallback((e) => {
    const { name, value, selectedOptions } = e.target;
    let updatedValue = value;
    if (name === "options") {
      updatedValue = Array.from(selectedOptions, (option) => option.value);
    }
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: updatedValue,
      };
    });
  }, []);

  const canSubmit = useMemo(() => {
    const { label, options } = form;
    return label && options.length > 0;
  }, [form]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addNewData(form);
    },
    [addNewData, form]
  );

  return (
    <form onSubmit={handleSubmit}>
      <select multiple name="options" onChange={onChange}>
        {MOCK_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input placeholder="Enter label" name="label" onChange={onChange} />
      <button disabled={!canSubmit} type="submit">
        Add Data
      </button>
    </form>
  );
}

export default DataForm;
