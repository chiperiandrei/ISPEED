import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//redux
import { loadUsers } from "../actions/userActions";
// graphql
import { useGetUsersQuery } from "../generated/graphql";

export default function Users() {
  const { data } = useGetUsersQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers(data?.getUsers));
  });

  return <li>Users loading</li>;
}
