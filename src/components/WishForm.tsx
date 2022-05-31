import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { FC, FormEvent, useState } from "react";
import { createWish } from "../services/wishes";
import "../styling/index.scss";

export const WishForm: FC = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [isPossible, setIsPossible] = useState(true);
  const [priority, setPriority] = useState<1 | 2 | 3>(1);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createWish({
      name,
      type,
      isPossible,
      priority,
    });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Wish Name"
      />
      <br />
      <Input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Wish Type"
      />
      <br />
      <FormControl id="1FormControl">
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          label="priority"
          onChange={(e) => setPriority(e.target.value as any)}
        >
          <MenuItem value={1}>{1}</MenuItem>
          <MenuItem value={2}>{2}</MenuItem>
          <MenuItem value={3}>{3}</MenuItem>
        </Select>
      </FormControl>
      <p>Is it actually possible?</p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>No</Typography>
        <Switch
          color="warning"
          checked={isPossible}
          onChange={() => setIsPossible(!isPossible)}
          inputProps={{ "aria-label": "ant design" }}
        />
        <Typography>Yes</Typography>
      </Stack>
      <Button id="button" type="submit">
        Submit
      </Button>
    </form>
  );
};
