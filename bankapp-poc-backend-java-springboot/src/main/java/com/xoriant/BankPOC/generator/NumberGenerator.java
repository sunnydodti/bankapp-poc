package com.xoriant.BankPOC.generator;

import java.util.Random;

public class NumberGenerator {

	static int GenerateRandomNumber(int charLength) {
		String num = String.valueOf(charLength < 1 ? 0 : new Random()
                .nextInt((9 * (int) Math.pow(10, charLength - 1)) - 1)
                + (int) Math.pow(10, charLength - 1));
        return Integer.parseInt(num);
    }
	
	static int GenerateRandomNumber(int charLength, String baseNumber) {
		String num = String.valueOf(charLength < 1 ? 0 : new Random()
				.nextInt((9 * (int) Math.pow(10, charLength - 1)) - 1)
				+ (int) Math.pow(10, charLength - 1));
		return Integer.parseInt(baseNumber + num);
	}
}


