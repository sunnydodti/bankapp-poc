package com.xoriant.BankPOC.exception;

public class IdNotFoundException extends RuntimeException {
	public IdNotFoundException() {
		super("ID NOT FOUND");
	}
}
