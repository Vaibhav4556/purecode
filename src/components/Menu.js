import * as React from "react";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DescriptionIcon from "@mui/icons-material/Description";
import AppsIcon from "@mui/icons-material/Apps";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CropIcon from "@mui/icons-material/Crop";
export default function Menu() {
  return (
    <MenuList>
      <MenuItem
        sx={{ display: "flex", flexDirection: "row", marginBottom:"20px"}}
      >
        <ListItemIcon>
          <CropIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <span style={{ fontWeight: "bold", fontSize: "35px" }}>S</span>
        </ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <HomeIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Home</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <BusinessCenterIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Catalog</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <ShoppingCartIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Orders</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <PermIdentityIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Customers</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <LocalOfferIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Discounts</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <DescriptionIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Pages</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <AppsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Apps</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <LanguageIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Translations</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <SettingsSuggestIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Confuguration</ListItemText>
      </MenuItem>
      <Divider />
    </MenuList>
  );
}
