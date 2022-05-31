import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  List,
  ListItem,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { WishForm } from "./components/WishForm";
import { getWishes, Wish } from "./services/wishes";
import "./styling/index.scss";

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#131924",
    },
    primary: {
      main: "#4d88ff",
    },
    secondary: {
      main: "#a9a9a9",
    },
  },
});

export const App: FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    getWishes().then(setWishes);
  }, []);

  console.log(wishes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h4>Arthur's</h4>
      <h3>
        <span>Wish List</span>
        <span>Wish List</span>
      </h3>
      <WishForm />
      <List id="list">
        {wishes.map((wish) => {
          return (
            <>
              <ListItem key={wish.name}>{wish.name}</ListItem>
            </>
          );
        })}
      </List>
    </ThemeProvider>
  );
};
