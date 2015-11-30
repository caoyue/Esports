#!/bin/sh

openssl aes-256-cbc -k ${ENCRYPT_PASS} -in scripts/ESportsdev.mobileprovision.enc -out scripts/ESportsdev.mobileprovision -d -a
openssl aes-256-cbc -k ${ENCRYPT_PASS} -in scripts/dist.cer.enc -out scripts/dist.cer -d -a
openssl aes-256-cbc -k ${ENCRYPT_PASS} -in scripts/dist.p12.enc -out scripts/dist.p12 -d -a
