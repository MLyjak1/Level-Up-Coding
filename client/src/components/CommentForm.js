import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from "../utils/mutations";
import { QUERY_COMMENTS } from "../utils/queries";