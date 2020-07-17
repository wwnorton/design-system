import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
	queryByRole, queryByText, queryByLabelText,
} from '@testing-library/react';
import { Tooltip } from '.';

test.afterEach(cleanup);

test.todo('write tests');
