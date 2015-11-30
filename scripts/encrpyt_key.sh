#!/bin/sh

source scripts/env.sh

openssl aes-256-cbc -k ${ENCRYPT_PASS} -in scripts/ESportsdev.mobileprovision -out scripts/ESportsdev.mobileprovision.enc -a
openssl aes-256-cbc -k ${ENCRYPT_PASS} -in scripts/dist.cer -out scripts/dist.cer.enc -a
openssl aes-256-cbc -k ${ENCRYPT_PASS} -in scripts/dist.p12 -out scripts/dist.p12.enc -a
