import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

library.add(faHeartSolid, faHeartOutline);

const WishlistButton = () => {
  const { wishlist } = useQuery(api.users.current) || { wishlist: [] };
  const wishlistIcon = wishlist.length ? faHeartSolid : faHeartOutline;

  return (
    <a href="">
      <FontAwesomeIcon size="2x" icon={wishlistIcon} />
    </a>
  );
};

export default WishlistButton;
