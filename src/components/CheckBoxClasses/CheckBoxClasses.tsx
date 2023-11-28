import React, { useState } from "react";

import { Container, InputData } from "./CheckBoxClasses.Style";

/*
  Esse componente receberá uma lista com todas as turmas para os quais
  o material selecionado está vinculado. Daí:
  Opção 1: Sempre que o check for marcado ou desmarcado, será feita a
  atualização.
  Opção 2: Terá um botão para confirmar qualquer alteração feita.
*/

interface ListItem {
  id: number;
  text: string;
}

interface CheckboxListProps {
  items: ListItem[];
  onCheckedItemsChange: (checkedItems: number[]) => void;
}

export default function CheckboxList({
  items,
  onCheckedItemsChange,
}: CheckboxListProps) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleCheckboxChange = (itemId: number) => {
    const isChecked = checkedItems.includes(itemId);
    let newCheckedItems: number[];

    if (isChecked) {
      newCheckedItems = checkedItems.filter((id) => id !== itemId);
    } else {
      newCheckedItems = checkedItems.concat(itemId);
    }

    setCheckedItems(newCheckedItems);
    onCheckedItemsChange(newCheckedItems);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <InputData
        type="text"
        placeholder="Busque turmas"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {filteredItems.map((item) => (
        <label key={item.id}>
          <input
            type="checkbox"
            checked={checkedItems.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
          />
          {item.text}
        </label>
      ))}
    </Container>
  );
}
