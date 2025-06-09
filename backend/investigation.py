def create_referral(transaction, reason):
    return {
        "transactionId": transaction['id'],
        "reason": reason,
        "flaggedAt": "TODO"  # add timestamp when calling
    }
