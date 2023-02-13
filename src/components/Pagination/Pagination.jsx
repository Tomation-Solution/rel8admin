import React from "react";
import {
  MembersPaginationCon,
  MembersPaginationItem,
} from "../Members/Members.styles";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <MembersPaginationCon>
      {pages.map((page, index) => {
        return (
          <MembersPaginationItem
            key={index}
            onClick={() => setCurrentPage(page)}
            style={page == currentPage ? { color: "red" } : { color: "" }}
          >
            {page}
          </MembersPaginationItem>
        );
      })}
    </MembersPaginationCon>
  );
};

export default Pagination;
