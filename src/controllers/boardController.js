/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {

  try {
    res.status(StatusCodes.CREATED).json({ message: 'POST from Controller: API create new broard' })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message
    })
  }
}

export const boardController = {
  createNew
}