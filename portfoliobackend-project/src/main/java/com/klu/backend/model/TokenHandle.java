package com.klu.backend.model;

import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;


import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

@Service
public class TokenHandle {
	public final String SEC_KEY="9989087633wijfnwirjenjehfniuefdejfb";
	public final SecretKey key=Keys.hmacShaKeyFor(SEC_KEY.getBytes());
	
	private Set<String> blacklistedTokens = new HashSet<>();
	
	public String createToken(String email) {
		Map<String, String> data=new HashMap<>();
		data.put("email", email);
		return Jwts.builder()
				.setClaims(data)
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000))
				.signWith(key)
				.compact();
	}
	public String checkToken(String jwtToken) {
        if (blacklistedTokens.contains(jwtToken)) {
            return "401::Token has been invalidated (user logged out)";
        }

        try {
            Claims c = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(jwtToken)
                    .getBody();

            Date expiry = c.getExpiration();
            if (expiry == null || expiry.before(new Date())) {
                return "401::Token expired";
            }

            return c.get("email", String.class);
        } catch (Exception e) {
            return "401::Invalid token";
        }
    }
	
	public String logoutToken(String jwtToken) {
        if (jwtToken == null || jwtToken.isEmpty()) {
            return "400::Token is missing";
        }

        blacklistedTokens.add(jwtToken);
        return "200::Logout successful. Token invalidated.";
    }
	
}
