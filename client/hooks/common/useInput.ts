import React, { useState } from 'react';

const useInput = <T extends {}>(initialValue: T) => {
  const [form, setForm] = useState<T>(initialValue);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return { form, handleChangeInput };
};

export default useInput;
