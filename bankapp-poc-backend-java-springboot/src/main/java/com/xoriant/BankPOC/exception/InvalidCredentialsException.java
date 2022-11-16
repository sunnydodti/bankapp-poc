package com.xoriant.BankPOC.exception;

public class InvalidCredentialsException extends RuntimeException {
	public InvalidCredentialsException(){
		super("INVALID CERDENTIALS");
	}
}
