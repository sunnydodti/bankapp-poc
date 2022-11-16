package com.xoriant.BankPOC.generator;

import java.io.Serializable;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class ManagerIdGenerator implements IdentifierGenerator {

	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {

		String baseNumber = "70";
		return NumberGenerator.GenerateRandomNumber(3, baseNumber);
	}
}