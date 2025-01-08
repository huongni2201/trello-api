/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required',
      'string.empty': 'Title is not allowed  to be empty',
      'string.min': 'Title min 3 chars',
      'string.max': 'Title max 50 chars',
      'string.trim': 'Title must not leading or trailing whitespace'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict()
  })

  try {
    console.log(req.body)

    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // next()
    res.status(StatusCodes.CREATED).json({ message: 'Note: API create new broard' })

  } catch (error) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      error: new Error(error).message
    })
  }
}

export const boardValidation = {
  createNew
}